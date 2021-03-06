import React, { useState, useCallback, useEffect, FC } from "react"
import Router from "next/router"
import cn from "classnames"

import TopBarMobile from "./TopBarMobile"
import SideMenu from "./SideMenu"
import Footer from "./Footer"

interface Props {
  children: React.ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  const [expanded, setExpanded] = useState(false)
  const collapse = useCallback(() => setExpanded(false), [])
  const toggle = useCallback(() => setExpanded(!expanded), [expanded])

  useEffect(() => {
    Router.events.on("routeChangeComplete", collapse)
    return () => Router.events.off("routeChangeComplete", collapse)
  }, [collapse])

  return (
    <div className={cn("layout mx-md-auto d-md-flex", { expanded })}>
      <TopBarMobile className="d-md-none py-4 px-3" onClickToggler={toggle} />
      <SideMenu className="d-md-block px-3 p-lg-5 py-4" />
      <div className="flex-md-grow-1 bg-white px-sm-3 pt-lg-5 py-4 overflow-hidden" onClick={collapse}>
        {children}
        <Footer />
      </div>
    </div>
  )
}

export default Layout
