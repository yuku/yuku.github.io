import React from "react"
import App, { Container } from "next/app"
import Head from "next/head"

import "../src/main.scss"

import Footer from "../src/components/Footer/Footer"
import Navigation from "../src/components/Navigation/Navigation"

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
            href="https://fonts.googleapis.com/css?family=Noto+Sans+JP:300,400,900&amp;subset=japanese"
            rel="stylesheet"
          />
          <script defer src="https://use.fontawesome.com/releases/v5.6.3/js/all.js" />
        </Head>
        <Navigation />
        <Component {...pageProps} />
        <Footer />
      </Container>
    )
  }
}

export default MyApp
