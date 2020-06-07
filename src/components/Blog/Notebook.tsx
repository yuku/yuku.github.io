import React, { FC } from "react"
import { Notebook as NotebookData } from "../../../entries"
import Layout from "./Layout"

interface Props {
  meta: NotebookData
  children: React.ReactNode
}

const Notebook: FC<Props> = (props) => (
  <Layout className="notebook" meta={props.meta}>
    {props.children}
  </Layout>
)

export default Notebook
