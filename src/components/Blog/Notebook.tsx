import React, { FC } from "react"

import { Metadata } from "src/posts"
import Layout from "src/components/Blog/Layout"

interface Props {
  meta: Metadata
  children: React.ReactNode
}

const Notebook: FC<Props> = (props) => (
  <Layout className="notebook" meta={props.meta}>
    {props.children}
  </Layout>
)

export default Notebook
