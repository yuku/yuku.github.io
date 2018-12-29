import Head from "next/head"
import Disqus from "disqus-react"

import { IMeta } from "*.mdx"
import { DISQUS_SHORT_NAME } from "../../constants"
import SingleCol from "../SingleCol/SingleCol"
import Header from "../Header/Header"

interface IProps extends IMeta {
  children: React.ReactNode
}

const disqusConfig = (meta: IMeta) => ({
  identifier: meta.id,
  title: meta.title,
})

const BlogPage = (props: IProps) => (
  <div>
    <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/themes/prism.min.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.10.0/katex.min.css" />
    </Head>
    <Header className="mb-5" backgroundImage={props.backgroundImage} style={{ backgroundColor: props.backgroundColor }}>
      <SingleCol className="text-center text-white">
        <h1 className="display-4 font-weight-bold">{props.title}</h1>
      </SingleCol>
    </Header>
    <SingleCol>
      {props.children}
      <div>
        <Disqus.DiscussionEmbed shortname={DISQUS_SHORT_NAME} config={disqusConfig(props)} />
      </div>
    </SingleCol>
  </div>
)

export default BlogPage
