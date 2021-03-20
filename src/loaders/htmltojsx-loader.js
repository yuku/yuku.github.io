const HTMLtoJSX = require("htmltojsx")

const converter = new HTMLtoJSX({ createClass: false })

module.exports = function (content) {
  return `
  import React from "react"
  const Page = () => ${converter.convert(content)}
  export default Page
  `
}
