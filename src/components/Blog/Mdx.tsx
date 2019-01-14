import React from "react"

import { IMdx } from "../../../entries"
import Layout from "./Layout"

import "./mdx.scss"

interface IProps {
  meta: IMdx
  children: React.ReactNode
}

export default class extends React.Component<IProps> {
  public componentDidMount() {
    if (this.props.meta.loadTwitterWidget) {
      const script = document.createElement("script")
      script.async = true
      script.src = "https://platform.twitter.com/widgets.js"
      script.charset = "utf-8"
      document.body.appendChild(script)
    }
  }

  public render() {
    return (
      <Layout className="mdx" meta={this.props.meta}>
        {this.props.children}
      </Layout>
    )
  }
}
