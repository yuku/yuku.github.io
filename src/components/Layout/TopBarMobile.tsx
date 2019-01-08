import Link from "next/link"
import cn from "classnames"

import { SITE_NAME } from "../../constants"

interface IProps {
  onClickToggler?: () => void
  className?: string
}

const TopBarMobile = (props: IProps) => (
  <nav className={cn("topbar-mobile d-flex justify-content-between", props.className)}>
    <Link href="/">
      <a href="/" className="brand">
        {SITE_NAME}
      </a>
    </Link>
    <button className="border-0 bg-transparent text-black-50" onClick={props.onClickToggler}>
      <i className="fas fa-bars" />
    </button>
  </nav>
)

export default TopBarMobile
