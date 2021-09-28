import React, { FC } from "react"
import { GetStaticProps } from "next"
import Link from "next/link"
import moment from "moment"

import { Post, getSortedPostsData } from "src/posts"
import { generateRSS } from "src/rss"

interface Props {
  posts: Post[]
}

const Index: FC<Props> = ({ posts }) => (
  <div className="container">
    <div className="row">
      <div className="col-12">
        {posts.map((entry) => (
          <article key={entry.path} className="mb-4">
            <Link href={entry.path}>
              <a href={entry.path} className="text-decoration-none">
                <h1>{entry.title}</h1>
              </a>
            </Link>
            <ul className="list-inline text-dark font-weight-light">
              <li className="list-inline-item">
                <span className="ml-1">{moment(entry.publishedAt).format("YYYY-MM-DD HH:mm")}</span>
              </li>
              <li className="list-inline-item">
                {entry.tags.map((tag, i) => [
                  i > 0 ? "," : null,
                  <span key={i} className="ml-1">
                    #{tag}
                  </span>,
                ])}
              </li>
            </ul>
          </article>
        ))}
      </div>
    </div>
  </div>
)

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = await getSortedPostsData()
  await generateRSS(posts)
  return { props: { posts } }
}

export default Index
