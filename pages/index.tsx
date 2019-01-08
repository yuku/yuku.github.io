import Link from "next/link"

import entries from "../src/entries"

export default () => (
  <div className="container">
    <div className="row">
      <div className="col-12">
        {entries.map(entry => (
          <article key={entry.href} className="mb-4">
            <Link href={entry.href}>
              <a href={entry.href} className="text-decoration-none">
                <h1>{entry.title}</h1>
              </a>
            </Link>
            <ul className="list-inline text-dark font-weight-light">
              <li className="list-inline-item">
                <i className="fas fa-calendar-day fa-fw" />
                <span className="ml-1">{entry.publishedAt.format("YYYY-MM-DD HH:mm")}</span>
              </li>
            </ul>
          </article>
        ))}
      </div>
    </div>
  </div>
)
