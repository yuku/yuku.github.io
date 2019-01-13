import React from "react"
import Link from "next/link"
import moment from "moment"

import { IMeta } from "*.mdx"

interface IProps {
  entries: (IMeta & { href: string })[]
}

export default class extends React.Component<IProps> {
  static async getInitialProps() {
    const entries = require("../src/entries").default
    return { entries }
  }

  public render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            {this.props.entries.map(entry => (
              <article key={entry.href} className="mb-4">
                <Link href={entry.href}>
                  <a href={entry.href} className="text-decoration-none">
                    <h1>{entry.title}</h1>
                  </a>
                </Link>
                <ul className="list-inline text-dark font-weight-light">
                  <li className="list-inline-item">
                    <i className="fas fa-calendar-day fa-fw" />
                    <span className="ml-1">{moment(entry.publishedAt).format("YYYY-MM-DD HH:mm")}</span>
                  </li>
                  <li className="list-inline-item">
                    <i className="fas fa-tags fa-fw" />
                    {entry.tags.map((tag, i) => [
                      i > 0 ? "," : null,
                      <span key={i} className="ml-1">
                        {tag}
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
}
