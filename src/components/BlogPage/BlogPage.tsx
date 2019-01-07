import React from "react"
import Head from "next/head"
import { withRouter, WithRouterProps } from "next/router"

import { IMeta } from "*.mdx"
import { AVATAR_PATHNAME, FB_APP_ID, SITE_NAME } from "../../constants"
import SingleCol from "../SingleCol/SingleCol"
import Header from "../Header/Header"

import "./blogpage.scss"

interface IProps extends IMeta {
  children: React.ReactNode
}

class BlogPage extends React.Component<WithRouterProps & IProps> {
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
      <div>
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
          <meta property="og:image" content={this.props.ogImage || `https://yuku.takahashi.coffee${AVATAR_PATHNAME}`} />
          <meta property="og:description" content={this.props.description} />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/themes/prism.min.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.10.0/katex.min.css" />
        </Head>
        <Header
          className="mb-5 text-center text-white"
          backgroundImage={this.props.backgroundImage}
          style={{ backgroundColor: this.props.backgroundColor }}
        >
          <h1 className="display-4 font-weight-bold">{this.props.title}</h1>
        </Header>
        <SingleCol>
          <div className="blogpage">{this.props.children}</div>
        </SingleCol>
      </div>
    )
  }
}

export default withRouter(BlogPage)
