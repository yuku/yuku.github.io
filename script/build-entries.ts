// Generate pages for each entries

import fs from "fs"
import utils from "util"
import path from "path"

import del from "del"
import prettier from "prettier"
import RSS from "rss"

import { entries } from "../entries"

const glob = utils.promisify(require("glob"))
const writeFile = utils.promisify(fs.writeFile)

const ROOT = path.resolve(__dirname, "../")

function createPageForMdx(entryName: string, pathname: string) {
  return `
    import React from "react"
    
    import { Mdx } from "${ROOT}/src/components/Blog"
    import Component from "./${entryName}"

    import { IMdx } from "${ROOT}/entries"

    interface IProps {
      meta: IMdx
    }

    const MdxPage = ({ meta }: IProps) => (
      <Mdx meta={meta}>
        <Component />
      </Mdx>
    )

    MdxPage.getInitialProps = async () => {
      const { entries } = require("${ROOT}/entries")
      return { meta: entries["${pathname.substr(6)}"] }
    }

    export default MdxPage
  `
}

function createPageForIpynb(entryName: string, pathname: string) {
  return `
    import React from "react"

    import { Notebook } from "${ROOT}/src/components/Blog"
    import Component from "./${entryName}"

    import { INotebook } from "${ROOT}/entries"

    interface IProps {
      meta: INotebook
    }

    const IpynbPage = ({ meta }: IProps) => (
      <Notebook meta={meta}>
        <Component />
      </Notebook>
    )

    IpynbPage.getInitialProps = async () => {
      const { entries } = require("${ROOT}/entries")
      return { meta: entries["${pathname.substr(6)}"] }
    }

    export default IpynbPage
  `
}

async function createPage(entryPath: string) {
  const type = entryPath.split(".")[1]
  if (type) {
    const func = type === "mdx" ? createPageForMdx : createPageForIpynb
    const pathname = entryPath.split(".")[0]
    const content = func(path.basename(entryPath), pathname)
    const options = await prettier.resolveConfig(pathname)
    const formatted = prettier.format(content, {
      parser: "typescript",
      ...options,
    })
    console.log(`* ${pathname}.tsx`)
    await writeFile(`${pathname}.tsx`, formatted)
  }
}

const rssPath = "static/rss-feed.xml"

function generateRSS() {
  const siteUrl = "https://yuku.takahashi.coffee"
  const feed = new RSS({
    title: "yt coffee",
    site_url: siteUrl,
    feed_url: siteUrl + "/" + rssPath,
  })
  Object.entries(entries).forEach(([path, { title, description, publishedAt }]) => {
    feed.item({
      title,
      description,
      url: siteUrl + "/" + path,
      date: publishedAt,
    })
  })
  return feed.xml({ indent: true })
}

async function main() {
  // Unlink all blog pages
  await del("pages/blog/**/*.tsx")

  console.log("Create blog pages:")
  const entryPaths = await glob("pages/blog/**/*")
  await Promise.all(entryPaths.map(createPage))

  const rssXML = generateRSS()
  fs.writeFileSync(rssPath, rssXML)
  console.log(`Saved RSS feed to ${rssPath}`)
}

main()
