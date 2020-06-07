import React, { FC } from "react"
import { entries } from "../../../entries"

interface Props {
  id: keyof typeof entries
  text?: string
}

const Link: FC<Props> = ({ id, text }) => <a href={`/${id}`}>{text || entries[id].title}</a>

export default Link
