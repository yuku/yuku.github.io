import React, { useEffect } from "react"

import { IMdx } from "../../../entries"
import Layout from "./Layout"

interface IProps {
  meta: IMdx
  children: React.ReactNode
}

export default function Mdx({ meta, children }: IProps) {
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
