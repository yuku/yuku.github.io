import path from "path"
import { promisify } from "util"

import glob from "glob"

// Metadata represents a configuration of a blog post.
// Each .mdx and .ipynb need to export the object as metadata.
export interface Metadata {
  title: string
  description: string
  tags: string[]
  publishedAt: string
  modifiedAt?: string
  loadTwitterWidget?: boolean
  ogImage?: string
}

export interface Post extends Metadata {
  path: string
}

const blogDirectory = path.join(process.cwd(), "pages/blog")
const pattern = path.join(blogDirectory, "*/*/*.@(mdx|ipynb)")
const globAsync = promisify(glob)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const validateMetadata = (arg: any): arg is Omit<Post, "path"> => {
  if (!Array.isArray(arg.tags)) return false
  // TODO: implement
  return true
}

export const getSortedPostsData = async (): Promise<Post[]> => {
  const fullPaths = await globAsync(pattern)

  const allPostsData = fullPaths.map((fullPath) => {
    const extension = path.extname(fullPath)
    const pagePath = "blog" + fullPath.substr(blogDirectory.length) // e.g. blog/2019/01/hello.mdx
    const postPath = pagePath.substr(0, pagePath.length - extension.length)
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { metadata } = require(`../pages/${pagePath}`)
    if (!validateMetadata(metadata)) {
      throw new Error(`Invalid metadata ${pagePath}: ${JSON.stringify(metadata)}`)
    }
    return { ...metadata, path: postPath }
  })

  return allPostsData.sort(({ publishedAt: a }, { publishedAt: b }) => (a < b ? 1 : a > b ? -1 : 0))
}
