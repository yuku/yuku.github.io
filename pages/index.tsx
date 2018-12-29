import Link from "next/link"
import moment from "moment"

import Header from "../src/components/Header/Header"
import SingleCol from "../src/components/SingleCol/SingleCol"

import entries from "../src/entries"

export default () => (
  <div>
    <Header className="mb-5" backgroundImage="/static/images/home-bg.jpg" overlay>
      <div className="text-center text-white">
        <h1 className="display-4 font-weight-bold">Study Hard, Play Harder</h1>
      </div>
    </Header>
    <SingleCol>
      {entries.map(entry => (
        <article>
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
