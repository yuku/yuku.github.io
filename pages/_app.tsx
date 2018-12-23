import React from "react"
import App, { Container } from "next/app"
import Head from "next/head"

import "../src/main.scss"

class MyApp extends App {
  public render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <title key="title">Yuku Takahashi</title>
          <link
            href="https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,900&amp;subset=japanese"
            rel="stylesheet"
          />
        </Head>
        <Component {...pageProps} />
      </Container>
    )
  }
}

export default MyApp
