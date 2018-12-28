const withSass = require("@zeit/next-sass")
const withTypescript = require("@zeit/next-typescript")

const math = require("remark-math")
const prism = require("rehype-prism")
const katex = require("rehype-katex")
const withMDX = require("@zeit/next-mdx")({
  options: {
    mdPlugins: [math],
    hastPlugins: [prism, katex],
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
