import React from "react"
import { Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler, NavLink, NavItem } from "reactstrap"
import Link from "next/link"

import "./navigation.scss"

interface IProps {
  isOpen: boolean
  onClickToggler: () => void
}

const Navigation = (props: IProps) => (
  <Navbar light fixed="top" expand="lg" className="mainnav">
    <Container>
      <Link href="/">
        <NavbarBrand href="/">SELECT * FROM life;</NavbarBrand>
      </Link>
      <NavbarToggler onClick={props.onClickToggler} />
      <Collapse isOpen={props.isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <Link href="/">
              <NavLink href="/">Home</NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/about">
              <NavLink href="/about">About Me</NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/resume">
              <NavLink href="/resume">Resume</NavLink>
            </Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Container>
  </Navbar>
)

export default Navigation
