import React from "react"
import { Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler, NavLink, NavItem } from "reactstrap"
import Link from "next/link"

import "./navigation.scss"

interface IState {
  isOpen: boolean
}

class Navigation extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props)
    this.state = {
      isOpen: false,
    }
    this.toggle = this.toggle.bind(this)
  }

  public render() {
    return (
      <Navbar light fixed="top" expand="lg" className="mainnav">
        <Container>
          <Link href="/">
            <NavbarBrand href="/">SELECT * FROM life;</NavbarBrand>
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
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
  }

  private toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
}

export default Navigation
