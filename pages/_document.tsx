import React from "react"
import Document, { Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  public render(): JSX.Element {
    return (
      <html prefix="og: http://ogp.me/ns#">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument
