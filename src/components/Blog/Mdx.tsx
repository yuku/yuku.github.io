import React, { FC, useEffect } from "react"

import { Mdx as MdxData } from "../../../entries"
import Layout from "./Layout"

interface Props {
  meta: MdxData
  children: React.ReactNode
}

const Mdx: FC<Props> = ({ meta, children }) => {
  useEffect(() => {
    if (meta.loadTwitterWidget) {
      const script = document.createElement("script")
      script.async = true
      script.src = "https://platform.twitter.com/widgets.js"
      script.charset = "utf-8"
      document.body.appendChild(script)
    }
  }, [])

  return (
    <Layout className="mdx" meta={meta}>
      {children}
    </Layout>
  )
}

export default Mdx
