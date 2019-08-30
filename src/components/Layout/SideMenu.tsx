import Link from "next/link"
import { withRouter } from "next/router"
import { WithRouterProps } from "next/dist/client/with-router"
import cn from "classnames"

import { SITE_NAME } from "../../constants"

interface IProps {
  className?: string
}

const SideMenu = (props: WithRouterProps & IProps) => (
  <div className={cn("side-menu", props.className)}>
    <div className="side-menu-inner">
      <Link href="/">
        <a href="/" className="brand">
          {SITE_NAME}
        </a>
      </Link>
      <p className="text-muted font-weight-light pt-1">
        <small>Study hard, play harder.</small>
      </p>
      <ul className="list list-unstyled">
        <li className={cn({ "font-weight-bold": props.router!.pathname === "/" })}>
          <Link href="/">
            <a href="/">Home</a>
          </Link>
        </li>
        <li className={cn({ "font-weight-bold": props.router!.pathname === "/about" })}>
          <Link href="/about">
            <a href="/about">About</a>
          </Link>
        </li>
        <li className={cn({ "font-weight-bold": props.router!.pathname === "/resume" })}>
          <Link href="/resume">
            <a href="/resume">Resume</a>
          </Link>
        </li>
      </ul>
    </div>
  </div>
)

export default withRouter(SideMenu)
