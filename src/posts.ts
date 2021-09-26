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

const getMdxPostData = (fileName: string): PostWithoutId => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { metadata } = require(`../posts/${fileName}`)
  if (!metadata) throw new Error(`Invalid metadata ${fileName}: ${JSON.stringify(metadata)}`)
  return metadata
}

const getIpynbPostData = async (fileName: string): Promise<PostWithoutId> => {
  const fullPath = path.join(postsDirectory, fileName)
  const fileContents = await fs.promises.readFile(fullPath, "utf-8")
  const { metadata } = JSON.parse(fileContents)
  return metadata["post_metadata"]
}

export const getSortedPostsData = async (): Promise<Post[]> => {
  const fileNames = await fs.promises.readdir(postsDirectory)
  const allPostsData = await Promise.all(
    fileNames.map(async (fileName): Promise<Post> => {
      const ext = path.extname(fileName)
      const [ymd, ...names] = path.basename(fileName, ext).split("_")
      const slug = names.join("_")
      const [year, month] = [ymd.substr(0, 4), ymd.substr(4, 2)]
      const postPath = ["blog", year, month, slug].join("/")

      let partial: PostWithoutId
      switch (ext) {
        case ".mdx":
          partial = getMdxPostData(fileName)
          break
        case ".ipynb":
          partial = await getIpynbPostData(fileName)
          break
        default:
          throw new Error(`Unexpected extension: ${ext}`)
      }
      return { ...partial, path: postPath, slug, year, month }
    }),
  )

  return allPostsData.sort(({ publishedAt: a }, { publishedAt: b }) => (a < b ? 1 : a > b ? -1 : 0))
}
