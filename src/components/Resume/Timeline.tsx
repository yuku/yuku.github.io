import React, { FC } from "react"

interface Props {
  children?: React.ReactNode
}

const Timeline: FC<Props> = (props) => <div className="timeline">{props.children}</div>

export default Timeline
