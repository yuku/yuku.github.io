module "next-ga" {
  import Router from "next/router"

  export default function withGA(code: string, router: typeof Router): (app: React.ComponentType) => React.ComponentType

  export interface Analytics {
    pageview: () => void
    event: (category: string, action: string) => void
    exception: (description: string, fatal: boolean = false) => void
  }
}
