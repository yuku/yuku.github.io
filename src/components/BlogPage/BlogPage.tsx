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

const BlogPage = withRouter((props: WithRouterProps & IProps) => (
  <div>
    <Head>
      <title>
        {props.title} - {SITE_NAME}
      </title>
      <meta name="description" content={props.description} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="@yuku_t" />
      <meta property="fb:app_id" content={FB_APP_ID} />
      <meta property="og:title" content={`${props.title} - ${SITE_NAME}`} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={`https://yuku.takahashi.coffee${props.router!.pathname}`} />
      <meta property="og:image" content={props.ogImage || `https://yuku.takahashi.coffee${AVATAR_PATHNAME}`} />
      <meta property="og:description" content={props.description} />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/themes/prism.min.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.10.0/katex.min.css" />
    </Head>
    <Header
      className="mb-5 text-center text-white"
      backgroundImage={props.backgroundImage}
      style={{ backgroundColor: props.backgroundColor }}
    >
      <h1 className="display-4 font-weight-bold">{props.title}</h1>
    </Header>
    <SingleCol>
      <div className="blogpage">{props.children}</div>
    </SingleCol>
  </div>
))

export default BlogPage
