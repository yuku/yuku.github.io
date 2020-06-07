import React, { FC } from "react"
import cn from "classnames"

interface Props {
  className?: string
  title: string
  children?: React.ReactNode
}

const Widget: FC<Props> = (props) => (
  <aside className={cn("widget mb-4", props.className)}>
    <h1 className="title font-weight-bold">{props.title}</h1>
    {props.children}
  </aside>
)

export default Widget
