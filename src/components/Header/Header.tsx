import React from "react"
import { Container, Col, Row } from "reactstrap"
import cn from "classnames"

import "./header.scss"

interface IProps {
  className?: string
  backgroundImage?: string
  style?: React.CSSProperties
  children?: React.ReactNode
  overlay?: boolean
}

const Header = (props: IProps) => {
  let style: React.CSSProperties = props.style || {}
  if (props.backgroundImage) {
    style = {
      background: "no-repeat center center",
      backgroundAttachment: "scroll",
      backgroundImage: `url('${props.backgroundImage}')`,
      backgroundSize: "cover",
      ...style,
    }
  }
  return (
    <header className={cn("masthead", props.className)} style={style}>
      {props.overlay && <div className="overlay" />}
      <Container>
        <Row>
          <Col lg="8" md="10" className="mx-auto">
            {props.children}
          </Col>
        </Row>
      </Container>
    </header>
  )
}

export default Header
