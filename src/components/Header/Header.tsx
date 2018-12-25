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
  fullScreen?: boolean
}

const Header = (props: IProps) => {
  let headerStyle: React.CSSProperties = props.style || {}
  let containerStyle: React.CSSProperties = {}
  if (props.backgroundImage) {
    headerStyle = {
      background: "no-repeat center center",
      backgroundAttachment: "scroll",
      backgroundImage: `url('${props.backgroundImage}')`,
      backgroundSize: "cover",
      ...headerStyle,
    }
  }
  if (props.fullScreen) {
    headerStyle = {
      height: "100vh",
      ...headerStyle,
    }
    containerStyle = {
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      justifyContent: "center",
      ...containerStyle,
    }
  } else if (props.children) {
    headerStyle = {
      padding: "200px 0 150px",
      ...headerStyle,
    }
  } else {
    headerStyle = { height: "63px", ...headerStyle }
  }
  return (
    <header className={cn("masthead", props.className)} style={headerStyle}>
      {props.overlay && <div className="overlay" />}
      {props.children && (
        <Container style={containerStyle}>
          <Row>
            <Col lg="8" md="10" className="mx-auto">
              {props.children}
            </Col>
          </Row>
        </Container>
      )}
    </header>
  )
}

export default Header
