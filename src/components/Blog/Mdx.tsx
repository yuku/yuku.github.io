import React, { FC, useEffect } from "react"

import { IMdx } from "../../../entries"
import Layout from "./Layout"

interface IProps {
  meta: IMdx
  children: React.ReactNode
}

const Mdx: FC<IProps> = ({ meta, children }) => {
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
