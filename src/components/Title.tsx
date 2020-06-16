import React, { FC } from "react"

import { SITE_NAME } from "../constants"

const Title: FC = ({ children }) => (
  <title>
    {children} - {SITE_NAME}
  </title>
)

export default Title
