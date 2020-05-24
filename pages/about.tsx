import Head from "next/head"

import { SITE_NAME } from "src/constants"

export default () => (
  <div className="container">
    <Head>
      <title>About Me - {SITE_NAME}</title>
    </Head>
    <div className="row">
      <div className="col-12">
        <main>
          <h1 className="h5 mb-4 mb-lg-5 text-uppercase text-center font-weight-bold">About Me</h1>
          <img className="mb-4 img-fluid rounded" src="/static/images/about-me.jpg" />
          <p>
            Yuku Takahashi is a Tokyo-based software developer best known for his ex-CTO career at Increments inc., a
            well-known acquired startup company in Japan. From browser and server-side Web application development to
            machine learning for algorithmic marketing, he is a dedicated open source contributor of the worlds he is
            passionate to be a part of.
          </p>
          <p>
            His hobby is jogging, playing classical guitar and drinking his own roasted coffee. He is having fun playing
            his child every single day.
          </p>
        </main>
      </div>
    </div>
  </div>
)
