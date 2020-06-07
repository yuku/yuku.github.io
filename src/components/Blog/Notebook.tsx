import React, { FC } from "react"
import { INotebook } from "../../../entries"
import Layout from "./Layout"

interface IProps {
  meta: INotebook
  children: React.ReactNode
}

const Notebook: FC<IProps> = (props) => (
  <Layout className="notebook" meta={props.meta}>
    {props.children}
  </Layout>
)

export default Notebook
