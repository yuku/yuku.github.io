const withSass = require("@zeit/next-sass")
const withTypescript = require("@zeit/next-typescript")

module.exports = withTypescript(withSass({
  exportPathMap: () => ({
    "/": { page: "/" },
    "/404.html": { page: "/_error" },
    "/about": { page: "/about" },
    "/resume": { page: "/resume" },
  }),
}))
