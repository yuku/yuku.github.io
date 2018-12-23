import React from "react"
import { Container, Col, Row } from "reactstrap"

import "./header.scss"

interface IProps {
  backgroundImage: string
  heading: string
  subheading: string
}

const Header = ({ heading, subheading, backgroundImage }: IProps) => (
  <header className="masthead" style={{ backgroundImage: `url("${backgroundImage}")` }}>
    <div className="overlay" />
    <Container>
      <Row>
        <Col lg="8" md="10" className="mx-auto">
          <div className="site-heading">
            <h1>{heading}</h1>
            <span className="subheading">{subheading}</span>
          </div>
        </Col>
      </Row>
    </Container>
  </header>
)

export default Header
