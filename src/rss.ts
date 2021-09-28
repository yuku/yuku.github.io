import fs from "fs"
import RSS from "rss"

import { SITE_NAME, SITE_URL } from "src/constants"
import { Post } from "src/posts"

const RSS_PATH = "static/rss-feed.xml"

export const generateRSS = async (sortedPostsData: Post[]): Promise<void> => {
  const feed = new RSS({
    title: SITE_NAME,
    site_url: SITE_URL,
    feed_url: SITE_URL + "/" + RSS_PATH,
  })
  sortedPostsData.forEach((post) => {
    feed.item({
      title: post.title,
      description: post.description,
      url: SITE_URL + post.path,
      date: post.publishedAt,
    })
  })
  const rssXML = feed.xml({ indent: true })
  await fs.promises.writeFile(`public/${RSS_PATH}`, rssXML)
  console.log(`Saved RSS feed to ${RSS_PATH}`)
}
