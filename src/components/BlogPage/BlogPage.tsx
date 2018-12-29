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
    <SingleCol>{props.children}</SingleCol>
  </div>
)

export default BlogPage
