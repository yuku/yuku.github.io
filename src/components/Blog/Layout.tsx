import React from "react"
import Head from "next/head"
import Link from "next/link"
import { withRouter } from "next/router"
import { WithRouterProps } from "next/dist/client/with-router"
import cn from "classnames"
import moment from "moment"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { Metadata } from "src/posts"
import { AVATAR_PATHNAME, FB_APP_ID, SITE_NAME } from "src/constants"
import { Widget } from "src/components/Widget"

interface Props {
  meta: Metadata
  className?: string
  children: React.ReactNode
}

const image = (ogImage?: string) => ogImage || `https://yuku.takahashi.coffee${AVATAR_PATHNAME}`

const Layout = (props: WithRouterProps & Props) => (
  <div className="blogpage container">
    <Head>
      <title>
        {props.meta.title} - {SITE_NAME}
      </title>
      <meta name="description" content={props.meta.description} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="@yuku_t" />
      <meta property="fb:app_id" content={FB_APP_ID} />
      <meta property="og:title" content={`${props.meta.title} - ${SITE_NAME}`} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={`https://yuku.takahashi.coffee${props.router!.pathname}`} />
      <meta property="og:image" content={image()} />
      <meta property="og:description" content={props.meta.description} />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/themes/prism.min.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.10.0/katex.min.css" />
    </Head>
    <div className="row">
      <main className={cn("col-xl-8", props.className)}>
        <article itemScope itemType="http://schema.org/BlogPosting">
          <meta itemProp="author" content="Yuku Takahashi" />
          <meta itemProp="datePublished" content={props.meta.publishedAt} />
          {props.meta.modifiedAt && <meta itemProp="dateModified" content={props.meta.modifiedAt} />}
          <meta itemProp="image" content={image()} />
          <header className="mb-4 header">
            <h1 className="headline" itemProp="headline">
              {props.meta.title}
            </h1>
            <ul className="list-inline text-dark font-weight-light">
              <li className="list-inline-item">
                <span className="ml-1">{moment(props.meta.publishedAt).format("YYYY-MM-DD HH:mm")}</span>
              </li>
              <li className="list-inline-item">
                {props.meta.tags.map((tag, i) => [
                  i > 0 ? "," : null,
                  <span key={i} className="ml-1">
                    #{tag}
                  </span>,
                ])}
              </li>
            </ul>
          </header>
          <section className="mb-4 body" itemProp="articleBody">
            {props.children}
          </section>
        </article>
      </main>
      <div className="col-xl-4">
        <div className="pl-xl-2">
          <Widget title="About Me">
            <div>
              <img src={AVATAR_PATHNAME} alt="avatar" className="avatar rounded-circle mb-4 mx-auto d-block" />
              <p>
                Software Engineer at FLYWHEEL. Working mainly on recommendation systems in these days. Ex-Qiita CTO.
                <Link href="/about">
                  <a href="/about" style={{ marginLeft: "4px" }}>
                    Read more
                  </a>
                </Link>
                .
              </p>
            </div>
          </Widget>
          <Widget title="Follow">
            <ul className="list-inline icons">
              <li className="list-inline-item">
                <a href="https://twitter.com/yuku_t">
                  <span className="fa-stack fa-lg">
                    <FontAwesomeIcon icon="circle" className="fa-stack-2x" />
                    <FontAwesomeIcon icon={["fab", "twitter"]} inverse className="fa-stack-1x" />
                  </span>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://github.com/yuku">
                  <span className="fa-stack fa-lg">
                    <FontAwesomeIcon icon="circle" className="fa-stack-2x" />
                    <FontAwesomeIcon icon={["fab", "github"]} inverse className="fa-stack-1x" />
                  </span>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="/static/rss-feed.xml">
                  <span className="fa-stack fa-lg">
                    <FontAwesomeIcon icon="circle" className="fa-stack-2x" />
                    <FontAwesomeIcon icon="rss" inverse className="fa-stack-1x" />
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

export default withRouter(Layout)
