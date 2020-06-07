import React, { FC } from "react"
import { entries } from "../../../entries"

interface IProps {
  id: keyof typeof entries
  text?: string
}

const Link: FC<IProps> = ({ id, text }) => <a href={`/${id}`}>{text || entries[id].title}</a>

export default Link
