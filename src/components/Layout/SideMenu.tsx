import React from "react"
import Link from "next/link"
import { withRouter } from "next/router"
import { WithRouterProps } from "next/dist/client/with-router"
import cn from "classnames"

import { SITE_NAME } from "../../constants"

interface Props {
  className?: string
}

const MENUS = [
  ["/", "Home"],
  ["/showcase", "Showcase"],
  ["/about", "About Me"],
  ["/resume", "Resume"],
]

const SideMenu = (props: WithRouterProps & Props) => (
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
        {MENUS.map(([pathname, text]) => (
          <li key={pathname} className={cn({ "font-weight-bold": props.router!.pathname === pathname })}>
            <Link href={pathname}>
              <a href={pathname}>{text}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
)

export default withRouter(SideMenu)
