import React, { FC } from "react"
import Head from "next/head"

import Title from "src/components/Title"

const NotFound: FC = () => (
  <div>
    <Head>
      <Title>404 Not Found</Title>
    </Head>
    <div className="display-4 text-center">
      <p>404 Not Found</p>
    </div>
  </div>
)

export default NotFound
