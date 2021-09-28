const path = require("path")
const github = require("remark-github")
const math = require("remark-math")
const footnotes = require("remark-footnotes")
const prism = require("@mapbox/rehype-prism")
const katex = require("rehype-katex")

const withMDX = require("@next/mdx")({
  options: {
    remarkPlugins: [footnotes, math, [github, { repository: "dummy/repo", mentionStrong: false }]],
    rehypePlugins: [prism, katex],
  },
})

const withNotebook = require("./src/notebook-loader").withNotebook({
  options: {
    inner: {
      remarkPlugins: [footnotes, math, [github, { repository: "dummy/repo", mentionStrong: false }]],
      remarkPlugins: [katex],
    },
    outer: {
      rehypePlugins: [prism],
    },
    notebookjs: {
      highlighter(text, pre, code, lang) {
        if (code != null) {
          // Add a class attribute for prism.
          code.className = `language-${lang || "text"}`
        }
        return text
      },
    },
  },
})

module.exports = withMDX(
  withNotebook({
    exportPathMap(defaultMap) {
      return {
        ...defaultMap,
        "/404.html": { page: "/_error" },
      }
    },
    pageExtensions: ["tsx", "mdx", "ipynb"],
    webpack(config) {
      config.resolveLoader.modules.push(path.resolve(__dirname, "src"))
      return config
    },
  }),
)
