import React from "react"
import Link from "next/link"
import moment from "moment"

import { IEntry } from "../entries"

interface IProps {
  entries: Array<IEntry & { id: string }>
}

function Index({ entries }: IProps) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          {entries.map((entry) => (
            <article key={entry.id} className="mb-4">
              <Link href={entry.id}>
                <a href={entry.id} className="text-decoration-none">
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
}

Index.getInitialProps = async () => {
  const data: Record<string, IEntry> = require("../entries").entries
  const entries: Array<IEntry & { id: string }> = Object.keys(data)
    .map((id) => ({
      id,
      ...data[id],
    }))
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
  return { entries }
}

export default Index
