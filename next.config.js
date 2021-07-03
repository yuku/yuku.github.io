const path = require("path")

const github = require("remark-github")
const math = require("remark-math")
const remarkFootnotes = require("remark-footnotes")
const prism = require("@mapbox/rehype-prism")
const katex = require("rehype-katex")
const withMDX = require("@next/mdx")({
  options: {
    remarkPlugins: [remarkFootnotes, math, [github, { repository: "dummy/repo", mentionStrong: false }]],
    rehypePlugins: [prism, katex],
  },
})

const withIpynb = (nextConfig) => ({
  ...nextConfig,
  webpack(config, options) {
    config.module.rules.push({
      test: /\.ipynb$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: path.resolve("src/loaders/htmltojsx-loader.js"),
        },
        {
          loader: path.resolve("src/loaders/ipynb-loader.js"),
        },
      ],
    })

    return nextConfig.webpack ? nextConfig.webpack(config, options) : config
  },
})

module.exports = withMDX(
  withIpynb({
    exportPathMap(defaultMap) {
      return {
        ...defaultMap,
        "/404.html": { page: "/_error" },
      }
    },
  }),
)
