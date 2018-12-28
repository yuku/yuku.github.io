import Head from "next/head"

import { IMeta } from "*.mdx"
import SingleCol from "../SingleCol/SingleCol"
import Header from "../Header/Header"

interface IProps extends IMeta {
  children: React.ReactNode
}

const BlogPage = (props: IProps) => (
  <div>
    <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.1/styles/hybrid.min.css" />
    </Head>
    <Header className="mb-5" backgroundImage={props.backgroundImage} style={{ backgroundColor: props.backgroundColor }}>
      <SingleCol className="text-center text-white">
        <h1 className="display-4 font-weight-bold">{props.title}</h1>
      </SingleCol>
    </Header>
    <SingleCol>{props.children}</SingleCol>
  </div>
)

export default BlogPage
