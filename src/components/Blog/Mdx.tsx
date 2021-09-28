import React, { FC, useEffect } from "react"

import { Metadata } from "src/posts"
import Layout from "src/components/Blog/Layout"

interface Props {
  meta: Metadata
  children: React.ReactNode
}

const Mdx: FC<Props> = ({ meta, children }) => {
  useEffect(() => {
    if (meta.loadTwitterWidget) {
      const script = document.createElement("script")
      script.async = true
      script.src = "https://platform.twitter.com/widgets.js"
      document.body.appendChild(script)
    }
  }, [meta.loadTwitterWidget])

  return (
    <Layout className="mdx" meta={meta}>
      {children}
    </Layout>
  )
}

export default Mdx
