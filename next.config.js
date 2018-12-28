const withSass = require("@zeit/next-sass")
const withTypescript = require("@zeit/next-typescript")

const highlight = require("rehype-highlight")
const withMDX = require("@zeit/next-mdx")({
  options: {
    hastPlugins: [highlight],
  },
})

module.exports = withTypescript(
  withSass(
    withMDX({
      pageExtensions: ["js", "jsx", "mdx"],
      exportPathMap: defaultMap => ({
        ...defaultMap,
        "/404.html": { page: "/_error" },
      }),
    }),
  ),
)
