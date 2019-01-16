import React from "react"
import cn from "classnames"

import "./layout.scss"

import TopBarMobile from "./TopBarMobile"
import SideMenu from "./SideMenu"
import Footer from "./Footer"

interface IProps {
  children: React.ReactNode
}

interface IState {
  expanded: boolean
}

export default class Layout extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      expanded: false,
    }
    this.collapse = this.collapse.bind(this)
    this.toggle = this.toggle.bind(this)
  }

  public render() {
    return (
      <div className={cn("layout mx-md-auto d-md-flex", { expanded: this.state.expanded })}>
        <TopBarMobile className="d-md-none py-4 px-3" onClickToggler={this.toggle} />
        <SideMenu className="d-md-block px-3 p-lg-5 py-4" />
        <div className="flex-md-grow-1 bg-white px-sm-3 pt-lg-5 py-4" onClick={this.collapse}>
          {this.props.children}
          <Footer />
        </div>
      </div>
    )
  }

  private toggle() {
    this.setState({
      expanded: !this.state.expanded,
    })
  }

  private collapse() {
    this.setState({
      expanded: false,
    })
  }
}
