import fs from "fs"
import path from "path"

export interface Post {
  path: string
  year: string
  month: string
  slug: string
  title: string
  description: string
  tags: string[]
  publishedAt: string
  modifiedAt?: string
  loadTwitterWidget?: boolean
  ogImage?: string
}

type PostWithoutId = Omit<Post, "id" | "slug" | "year" | "month">

const postsDirectory = path.join(process.cwd(), "posts")

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const validateMetadata = (arg: any): arg is PostWithoutId => {
  if (!Array.isArray(arg.tags)) return false
  // TODO: implement
  return true
}

export const getSortedPostsData = async (): Promise<Post[]> => {
  const fileNames = await fs.promises.readdir(postsDirectory)
  const allPostsData = await Promise.all(
    fileNames.map(async (fileName): Promise<Post> => {
      const ext = path.extname(fileName)
      const [yyyymm, ...names] = path.basename(fileName, ext).split("_")
      const slug = names.join("_")
      const [year, month] = [yyyymm.substr(0, 4), yyyymm.substr(4)]
      const postPath = ["blog", year, month, slug].join("/")

      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const { metadata } = require(`../posts/${fileName}`)
      if (!validateMetadata(metadata)) {
        throw new Error(`Invalid metadata ${fileName}: ${JSON.stringify(metadata)}`)
      }
      return { ...metadata, path: postPath, slug, year, month }
    }),
  )

  return allPostsData.sort(({ publishedAt: a }, { publishedAt: b }) => (a < b ? 1 : a > b ? -1 : 0))
}
