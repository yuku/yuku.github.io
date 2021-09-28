const nb = require("notebookjs")
const unified = require("unified")
const remarkParse = require("remark-parse")
const remarkRehype = require("remark-rehype")
const rehypeParse = require("rehype-parse")
const rehypeStringify = require("rehype-stringify")
const HTMLtoJSX = require("htmltojsx")
const { getOptions } = require("loader-utils")

let isNotebookjsInitialized = false
const converter = new HTMLtoJSX({ createClass: false })

const initNotebookjs = (options = {}) => {
  if (isNotebookjsInitialized) {
    throw new Error("notebookjs has already been initialized")
  }
  isNotebookjsInitialized = true

  const mdProcessor = unified()
    .use(remarkParse)
    .use(options.remarkPlugins || [])
    .use(remarkRehype)
    .use(options.rehypePlugins || [])
    .use(rehypeStringify)

  Object.assign(
    nb,
    {
      markdown(markdown) {
        return mdProcessor.processSync(markdown).toString()
      },
    },
    options?.notebookjs,
  )
}

module.exports = function (content) {
  if (!isNotebookjsInitialized) {
    throw new Error("notebookjs isn't initialized")
  }

  const callback = this.async()
  const options = getOptions(this)

  const htmlProcessor = unified()
    .use(rehypeParse)
    .use(options.rehypePlugins || [])
    .use(rehypeStringify)

  const obj = JSON.parse(content)
  const html = nb.parse(obj).render().outerHTML
  htmlProcessor.process(html, (err, file) => {
    if (err != null) return callback(err)
    const html = file.toString()
    callback(
      null,
      `
      import React from "react"
      export const metadata = ${JSON.stringify(obj.metadata.post_metadata)}
      const Page = () => ${converter.convert(html)}
      export default Page
      `,
    )
  })
}

module.exports.withNotebook =
  (pluginOptions = {}) =>
  (nextConfig = {}) => {
    const extension = pluginOptions.extension || /\.ipynb$/

    initNotebookjs(pluginOptions.options?.inner)

    return Object.assign({}, nextConfig, {
      webpack(config, options) {
        config.module?.rules?.push({
          test: extension,
          use: [
            options.defaultLoaders.babel,
            {
              loader: "notebook-loader",
              options: pluginOptions.options?.outer,
            },
          ],
        })

        return nextConfig.webpack ? nextConfig.webpack(config, options) : config
      },
    })
  }
