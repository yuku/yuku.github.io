import React, { FC } from "react"

interface IProps {
  children?: React.ReactNode
}

const Timeline: FC<IProps> = (props) => <div className="timeline">{props.children}</div>

export default Timeline
