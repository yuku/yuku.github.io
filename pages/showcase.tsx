import React, { FC } from "react"
import Head from "next/head"

import Title from "src/components/Title"

const ENTRIES = [
  {
    title: "Textcomplete",
    url: "/textcomplete",
    repository: "textcomplete",
    description: (
      <p>
        Autocomplete for <code>HTMLTextAreaElement</code> and more.
      </p>
    ),
  },
  {
    title: "yt coffee",
    url: "/",
    repository: "yuku.github.io",
    description: <p>My personal blog built on Next.js. This site is it.</p>,
  },
]

const Showcase: FC = () => (
  <div className="container">
    <Head>
      <Title>Showcase</Title>
    </Head>
    <div className="row">
      {ENTRIES.map(({ title, url, repository, description }) => (
        <article className="col-lg-6 mb-4" key={title}>
          <h1>
            <a href={url}>{title}</a>
          </h1>
          <ul className="list-inline text-dark font-weight-light">
            <li>
              <small>
                GitHub:&nbsp;
                <a
                  href={`https://github.com/yuku/${repository}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-decoration-none"
                >
                  yuku/{repository}
                </a>
              </small>
            </li>
          </ul>
          {description}
        </article>
      ))}
    </div>
  </div>
)

export default Showcase
