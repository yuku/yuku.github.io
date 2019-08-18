const nb = require("notebookjs")

const unified = require("unified")
const rehypeKatex = require("rehype-katex")
const rehypeParse = require("rehype-parse")
const rehypePrism = require("@mapbox/rehype-prism")
const rehypeStringify = require("rehype-stringify")
const remarkGithub = require("remark-github")
const remarkMath = require("remark-math")
const remarkParse = require("remark-parse")
const remarkRehype = require("remark-rehype")

const markdownProcessor = unified()
  .data("settings", {
    footnotes: true,
  })
  .use(remarkParse)
  .use(remarkMath)
  .use(remarkGithub, { repository: "dummy/repo", mentionStrong: false })
  .use(remarkRehype)
  .use(rehypeKatex)
  .use(rehypeStringify)

const htmlProcessor = unified()
  .use(rehypeParse)
  .use(rehypePrism)
  .use(rehypeStringify)

nb.markdown = function(markdown) {
  return markdownProcessor.processSync(markdown).toString()
}

nb.highlighter = function(text, pre, code, lang) {
  if (code != null) {
    // Add a class attribute for prism.
    code.className = `language-${lang || "text"}`
  }
  return text
}

module.exports = function(content) {
  return htmlProcessor.processSync(nb.parse(JSON.parse(content)).render().outerHTML).toString()
}
