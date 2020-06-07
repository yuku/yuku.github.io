import React, { FC } from "react"
import Head from "next/head"

import { SITE_NAME } from "src/constants"

const NotFound: FC = () => (
  <div>
    <Head>
      <title>404 Not Found - {SITE_NAME}</title>
    </Head>
    <div className="display-4 text-center">
      <p>404 Not Found</p>
    </div>
  </div>
)

export default NotFound
