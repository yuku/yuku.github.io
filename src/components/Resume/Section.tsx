import React, { FC } from "react"

interface Props {
  title: string
  children?: React.ReactNode
}

const ResumeSection: FC<Props> = (props) => (
  <section className="mb-3">
    <h3 className="pt-3 pb-3">{props.title}</h3>
    {props.children}
  </section>
)

export default ResumeSection
