import React, { FC } from "react"
import TimelineItem from "./TimelineItem"

interface Props {
  degree: string
  time: string
  name: string
  children?: React.ReactNode
}

const Education: FC<Props> = (props) => (
  <TimelineItem
    className="education"
    head={
      <div>
        <h3>{props.name}</h3>
        <span className="d-block h5">{props.degree}</span>
      </div>
    }
    left={<div className="text-muted">{props.time}</div>}
    description={props.children}
  />
)

export default Education
