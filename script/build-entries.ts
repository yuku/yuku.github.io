// Generate pages for each entries

const fs = require("fs")
const utils = require("util")
const path = require("path")

const del = require("del")
const prettier = require("prettier")

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

    export default class extends React.Component<IProps> {
      static async getInitialProps() {
        const { entries } = require("${ROOT}/entries")
        return { meta: entries["${pathname.substr(6)}"] }
      }

      public render() {
        return (
          <Mdx meta={this.props.meta}>
            <Component />
          </Mdx>
        )
      }
    }
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

    export default class extends React.Component<IProps> {
      static async getInitialProps() {
        const { entries } = require("${ROOT}/entries")
        return { meta: entries["${pathname.substr(6)}"] }
      }

      public render() {
        return (
          <Notebook meta={this.props.meta}>
            <Component />
          </Notebook>
        )
      }
    }
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

async function main() {
  // Unlink all blog pages
  await del("pages/blog/**/*.tsx")

  console.log("Create blog pages:")
  const entryPaths = await glob("pages/blog/**/*")
  await Promise.all(entryPaths.map(createPage))
}

main()
