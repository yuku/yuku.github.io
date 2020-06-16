import React, { FC } from "react"
import Head from "next/head"

import Title from "src/components/Title"

const About: FC = () => (
  <div className="container">
    <Head>
      <Title>About Me</Title>
    </Head>
    <div className="row">
      <div className="col-12">
        <main>
          <h1 className="h5 mb-4 mb-lg-5 text-uppercase text-center font-weight-bold">About Me</h1>
          <img className="mb-4 img-fluid rounded" src="/static/images/about-me.jpg" />
          <p>
            <strong>Yuku Takahashi</strong> is a Tokyo-based software developer best known for his ex-CTO career at{" "}
            <a href="https://increments.co.jp">Increments</a>, a well-known acquired startup company that develops{" "}
            <a href="https://qiita.com">qiita.com</a>. He is currently working on the development of marketing systems,
            mainly recommendation systems, at <a href="https://www.flywheel.jp">Flywheel</a>.
          </p>
          <p>
            From browser and server-side Web application development to machine learning for algorithmic marketing, he
            is a dedicated open source contributor of the worlds he is passionate to be a part of.
          </p>
          <p>
            His hobby is jogging, playing classical guitar and drinking his own roasted coffee. He enjoys playing with
            his kid every day.
          </p>
        </main>
      </div>
    </div>
  </div>
)

export default About
