const withSass = require("@zeit/next-sass")
const withTypescript = require("@zeit/next-typescript")

module.exports = withTypescript(
  withSass({
    exportPathMap: defaultMap => ({
      ...defaultMap,
      "/404.html": { page: "/_error" },
    }),
  }),
)
