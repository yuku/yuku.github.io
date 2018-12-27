const withSass = require("@zeit/next-sass")
const withTypescript = require("@zeit/next-typescript")
const withMDX = require("@zeit/next-mdx")()

module.exports = withTypescript(
  withSass(
    withMDX({
      exportPathMap: defaultMap => ({
        ...defaultMap,
        "/404.html": { page: "/_error" },
      }),
    }),
  ),
)
