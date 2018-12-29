import Link from "next/link"

import Header from "../src/components/Header/Header"
import SingleCol from "../src/components/SingleCol/SingleCol"

import entries from "../src/entries"

export default () => (
  <div>
    <Header className="mb-5 text-center text-white" backgroundImage="/static/images/home-bg.jpg" overlay>
      <h1 className="display-4 font-weight-bold">Study Hard, Play Harder</h1>
    </Header>
    <SingleCol>
      {entries.map(entry => (
        <article key={entry.href}>
          <Link href={entry.href}>
            <a>
              <h1 className="h3">{entry.title}</h1>
            </a>
          </Link>
          {entry.publishedAt.format("YYYY-MM-DD HH:mm")}
        </article>
      ))}
    </SingleCol>
  </div>
)
