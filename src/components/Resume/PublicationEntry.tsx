import React, { FC } from "react"

interface Props {
  title: string
  author: React.ReactNode
  name: string | React.ReactNode
}

const PublicationEntry: FC<Props> = (props) => (
  <article>
    <h5 className="mb-0">{props.title}</h5>
    <div>{props.author}</div>
    <div>{props.name}</div>
  </article>
)

export default PublicationEntry
