import React from "react"
import Head from "next/head"
import Link from "next/link"
import { withRouter, WithRouterProps } from "next/router"
import moment from "moment"

import { IMeta } from "*.mdx"
import { AVATAR_PATHNAME, FB_APP_ID, SITE_NAME } from "../../constants"
import { Widget } from "../Widget"

import "./blogpage.scss"

interface IProps extends IMeta {
  children: React.ReactNode
}

class BlogPage extends React.Component<WithRouterProps & IProps> {
  private publishedAt: string

  constructor(props: WithRouterProps & IProps) {
    super(props)
    this.publishedAt = moment(props.publishedAt).format("YYYY-MM-DD HH:mm")
  }

  public componentDidMount() {
    if (this.props.loadTwitterWidget) {
      const script = document.createElement("script")
      script.async = true
      script.src = "https://platform.twitter.com/widgets.js"
      script.charset = "utf-8"
      document.body.appendChild(script)
    }
  }

  public render() {
    return (
      <div className="blogpage container">
        <Head>
          <title>
            {this.props.title} - {SITE_NAME}
          </title>
          <meta name="description" content={this.props.description} />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:creator" content="@yuku_t" />
          <meta property="fb:app_id" content={FB_APP_ID} />
          <meta property="og:title" content={`${this.props.title} - ${SITE_NAME}`} />
          <meta property="og:type" content="article" />
          <meta property="og:url" content={`https://yuku.takahashi.coffee${this.props.router!.pathname}`} />
          <meta property="og:image" content={this.image()} />
          <meta property="og:description" content={this.props.description} />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/themes/prism.min.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.10.0/katex.min.css" />
        </Head>
        <div className="row">
          <main className="col-xl-8">
            <article itemScope itemType="http://schema.org/BlogPosting">
              <meta itemProp="author" content="Yuku Takahashi" />
              <meta itemProp="datePublished" content={this.props.publishedAt} />
              {this.props.modifiedAt && <meta itemProp="dateModified" content={this.props.modifiedAt} />}
              <meta itemProp="image" content={this.image()} />
              <header className="header mb-4">
                <h1 itemProp="headline">{this.props.title}</h1>
                <ul className="list-inline text-dark font-weight-light">
                  <li className="list-inline-item">
                    <i className="fas fa-calendar-day fa-fw" />
                    <span className="ml-1">{this.publishedAt}</span>
                  </li>
                  <li className="list-inline-item">
                    <i className="fas fa-tags fa-fw" />
                    {this.props.tags.map((tag, i) => [
                      i > 0 ? "," : null,
                      <span key={i} className="ml-1">
                        {tag}
                      </span>,
                    ])}
                  </li>
                </ul>
              </header>
              <section className="body mb-4" itemProp="articleBody">
                {this.props.children}
              </section>
            </article>
          </main>
          <div className="col-xl-4">
            <div className="pl-xl-2">
              <Widget title="About Me">
                <div>
                  <img src={AVATAR_PATHNAME} alt="avatar" className="avatar rounded-circle mb-4 mx-auto d-block" />
                  <p>
                    Increments 社最初の従業員として Qiita を開発したり CTO やったりしていました。現在有給消化中。
                    <Link href="/about">
                      <a href="/about">もっと読む</a>
                    </Link>
                  </p>
                </div>
              </Widget>
              <Widget title="Follow">
                <ul className="list-inline icons">
                  <li className="list-inline-item">
                    <a href="https://twitter.com/yuku_t">
                      <span className="fa-stack fa-lg">
                        <i className="fas fa-circle fa-stack-2x" />
                        <i className="fab fa-twitter fa-stack-1x fa-inverse" />
                      </span>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://github.com/yuku">
                      <span className="fa-stack fa-lg">
                        <i className="fas fa-circle fa-stack-2x" />
                        <i className="fab fa-github fa-stack-1x fa-inverse" />
                      </span>
                    </a>
                  </li>
                </ul>
              </Widget>
            </div>
          </div>
        </div>
      </div>
    )
  }

  private image() {
    return this.props.ogImage || `https://yuku.takahashi.coffee${AVATAR_PATHNAME}`
  }
}

export default withRouter(BlogPage)
