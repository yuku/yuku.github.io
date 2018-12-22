import React from "react"
import App, { Container } from "next/app"
import Head from "next/head"

import "../src/main.scss"

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <title key="title">Yuku Takahashi</title>
        </Head>
        <Component {...pageProps} />
      </Container>
    )
  }
}

export default MyApp
