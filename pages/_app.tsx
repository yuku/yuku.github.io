import React from "react"
import App, { Container } from "next/app"
import Head from "next/head"
import Router from "next/router"
import withGA from "next-ga"

import "../src/main.scss"

import config from "../src/config"
import Footer from "../src/components/Footer/Footer"
import Navigation from "../src/components/Navigation/Navigation"

class MyApp extends App {
  constructor(props: any) {
    super(props)
    this.state = {
      isOpen: false,
    }
    this.close = this.close.bind(this)
    this.toggle = this.toggle.bind(this)
  }

  public render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <title key="title">{config.siteName}</title>
          <link rel="apple-touch-icon" sizes="57x57" href="/static/icons/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/static/icons/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/static/icons/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/static/icons/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/static/icons/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/static/icons/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/static/icons/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/static/icons/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/static/icons/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/static/icons/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/icons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/static/icons/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/icons/favicon-16x16.png" />
          <link rel="icon" href="/static/icons/favicon.ico" />
          <link rel="manifest" href="/static/manifest.json" />
          <meta name="msapplication-TileColor" content="#00BCD4" />
          <meta name="msapplication-TileImage" content="/static/icons/ms-icon-144x144.png" />
          <meta name="msapplication-config" content="/static/browserconfig.xml" />
          <meta name="theme-color" content="#00BCD4" />
          <link
            href="https://fonts.googleapis.com/css?family=Noto+Sans+JP:300,400,900&amp;subset=japanese"
            rel="stylesheet"
          />
          <script defer src="https://use.fontawesome.com/releases/v5.6.3/js/all.js" />
        </Head>
        <Navigation isOpen={(this.state as any).isOpen} onClickToggler={this.toggle} />
        <div onClick={this.close}>
          <Component {...pageProps} />
          <Footer />
        </div>
      </Container>
    )
  }

  private toggle() {
    this.setState({
      isOpen: !(this.state as any).isOpen,
    })
  }

  private close() {
    this.setState({
      isOpen: false,
    })
  }
}

export default withGA("UA-4932407-15", Router)(MyApp)
