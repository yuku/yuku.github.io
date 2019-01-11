import cn from "classnames"

import "./widget.scss"

interface IProps {
  className?: string
  title: string
  children?: React.ReactNode
}

export default (props: IProps) => (
  <aside className={cn("widget mb-4", props.className)}>
    <h1 className="title font-weight-bold">{props.title}</h1>
    {props.children}
  </aside>
)
