(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{25:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(11),c=a.n(l),s=a(10),m=a.n(s),o=a(20),i=a(5),p=a.n(i),u=a(1),f=a.n(u),E=a(3),d=(a(87),function(e){return r.a.createElement("aside",{className:p()("widget mb-4",e.className)},r.a.createElement("h1",{className:"title font-weight-bold"},e.title),e.children)}),b=(a(88),function(e){return e||"https://yuku.takahashi.coffee".concat(E.a)}),h=Object(o.withRouter)(function(e){return r.a.createElement("div",{className:"blogpage container"},r.a.createElement(c.a,null,r.a.createElement("title",null,e.meta.title," - ",E.c),r.a.createElement("meta",{name:"description",content:e.meta.description}),r.a.createElement("meta",{name:"twitter:card",content:"summary"}),r.a.createElement("meta",{name:"twitter:creator",content:"@yuku_t"}),r.a.createElement("meta",{property:"fb:app_id",content:E.b}),r.a.createElement("meta",{property:"og:title",content:"".concat(e.meta.title," - ").concat(E.c)}),r.a.createElement("meta",{property:"og:type",content:"article"}),r.a.createElement("meta",{property:"og:url",content:"https://yuku.takahashi.coffee".concat(e.router.pathname)}),r.a.createElement("meta",{property:"og:image",content:b()}),r.a.createElement("meta",{property:"og:description",content:e.meta.description}),r.a.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/themes/prism.min.css"}),r.a.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.10.0/katex.min.css"})),r.a.createElement("div",{className:"row"},r.a.createElement("main",{className:"col-xl-9"},r.a.createElement("article",{itemScope:!0,itemType:"http://schema.org/BlogPosting"},r.a.createElement("meta",{itemProp:"author",content:"Yuku Takahashi"}),r.a.createElement("meta",{itemProp:"datePublished",content:e.meta.publishedAt}),e.meta.modifiedAt&&r.a.createElement("meta",{itemProp:"dateModified",content:e.meta.modifiedAt}),r.a.createElement("meta",{itemProp:"image",content:b()}),r.a.createElement("header",{className:"mb-4"},r.a.createElement("h1",{itemProp:"headline"},e.meta.title),r.a.createElement("ul",{className:"list-inline text-dark font-weight-light"},r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("i",{className:"fas fa-calendar-day fa-fw"}),r.a.createElement("span",{className:"ml-1"},f()(e.meta.publishedAt).format("YYYY-MM-DD HH:mm"))),r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("i",{className:"fas fa-tags fa-fw"}),e.meta.tags.map(function(e,t){return[t>0?",":null,r.a.createElement("span",{key:t,className:"ml-1"},e)]})))),r.a.createElement("section",{className:p()("mb-4",e.className),itemProp:"articleBody"},e.children))),r.a.createElement("div",{className:"col-xl-3"},r.a.createElement("div",{className:"pl-xl-2"},r.a.createElement(d,{title:"About Me"},r.a.createElement("div",null,r.a.createElement("img",{src:E.a,alt:"avatar",className:"avatar rounded-circle mb-4 mx-auto d-block"}),r.a.createElement("p",null,"Increments 社最初の従業員として Qiita を開発したり CTO やったりしていました。現在有給消化中。",r.a.createElement(m.a,{href:"/about"},r.a.createElement("a",{href:"/about"},"もっと読む"))))),r.a.createElement(d,{title:"Follow"},r.a.createElement("ul",{className:"list-inline icons"},r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("a",{href:"https://twitter.com/yuku_t"},r.a.createElement("span",{className:"fa-stack fa-lg"},r.a.createElement("i",{className:"fas fa-circle fa-stack-2x"}),r.a.createElement("i",{className:"fab fa-twitter fa-stack-1x fa-inverse"})))),r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("a",{href:"https://github.com/yuku"},r.a.createElement("span",{className:"fa-stack fa-lg"},r.a.createElement("i",{className:"fas fa-circle fa-stack-2x"}),r.a.createElement("i",{className:"fab fa-github fa-stack-1x fa-inverse"}))))))))))});a(89);function N(e){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e,t){return!t||"object"!==N(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var x=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),v(this,k(t).apply(this,arguments))}var a,n,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(t,r.a.Component),a=t,(n=[{key:"componentDidMount",value:function(){if(this.props.meta.loadTwitterWidget){var e=document.createElement("script");e.async=!0,e.src="https://platform.twitter.com/widgets.js",e.charset="utf-8",document.body.appendChild(e)}}},{key:"render",value:function(){return r.a.createElement(h,{className:"mdx",meta:this.props.meta},this.props.children)}}])&&y(a.prototype,n),l&&y(a,l),t}(),g=(a(90),function(e){return r.a.createElement(h,{className:"notebook",meta:e.meta},e.children)});a.d(t,"a",function(){return x}),a.d(t,"b",function(){return g})},378:function(e,t,a){__NEXT_REGISTER_PAGE("/blog/2019/01/hello-ipynb",function(){return e.exports=a(396),{page:e.exports.default}})},396:function(e,t,a){"use strict";a.r(t);var n=a(15),r=a.n(n),l=a(0),c=a.n(l),s=a(25),m=function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"cell border-box-sizing text_cell rendered"},c.a.createElement("div",{className:"prompt input_prompt"}),c.a.createElement("div",{className:"inner_cell"},c.a.createElement("div",{className:"text_cell_render border-box-sizing rendered_html"},c.a.createElement("p",null,"ブログで Jupyter Notebook を表示できるようにしました。今後機械学習やデータ分析のログなどを公開するのに使っていこうと思います 💪🏼")))),c.a.createElement("div",{className:"cell border-box-sizing code_cell rendered"},c.a.createElement("div",{className:"input"},c.a.createElement("div",{className:"prompt input_prompt"},"In [1]:"),c.a.createElement("div",{className:"inner_cell"},c.a.createElement("div",{className:"input_area"},c.a.createElement("div",{className:" highlight hl-ipython3"},c.a.createElement("pre",null,c.a.createElement("span",null),c.a.createElement("span",{className:"nb"},"print"),c.a.createElement("span",{className:"p"},"("),c.a.createElement("span",{className:"s2"},'"Hello world"'),c.a.createElement("span",{className:"p"},")"),"\n"))))),c.a.createElement("div",{className:"output_wrapper"},c.a.createElement("div",{className:"output"},c.a.createElement("div",{className:"output_area"},c.a.createElement("div",{className:"prompt"}),c.a.createElement("div",{className:"output_subarea output_stream output_stdout output_text"},c.a.createElement("pre",null,"Hello world","\n")))))),c.a.createElement("div",{className:"cell border-box-sizing text_cell rendered"},c.a.createElement("div",{className:"prompt input_prompt"}),c.a.createElement("div",{className:"inner_cell"},c.a.createElement("div",{className:"text_cell_render border-box-sizing rendered_html"},c.a.createElement("h2",{id:"実装"},"実装",c.a.createElement("a",{className:"anchor-link",href:"#実装"},"¶")),c.a.createElement("p",null,"以降で Next.js で ipynb 形式のファイルを扱えるようにする方法を解説します。"),c.a.createElement("p",null,"Next.js で ipynb ファイルを表示するには大きく分けて 2 つの処理が必要です:"),c.a.createElement("ol",null,c.a.createElement("li",null,"Webpack を使って ipynb ファイルを読めるようにする"),c.a.createElement("li",null,"読み込んだ ipynb を React Component にする")),c.a.createElement("h3",{id:"ipynb-ファイルを読めるようにする"},"ipynb ファイルを読めるようにする",c.a.createElement("a",{className:"anchor-link",href:"#ipynb-ファイルを読めるようにする"},"¶")),c.a.createElement("p",null,"Next.js はファイルの解決に Webpack を使っているので ",c.a.createElement("a",{href:"https://www.npmjs.com/package/ipynb-loader"},"ipynb-loader")," を使うことができます。この loader は内部的で ",c.a.createElement("a",{href:"https://github.com/jupyter/nbconvert"},"jupyter/nbconvert")," を呼び出し、その結果を返すだけのものです。 jupyter/nbconvert は ipynb ファイルを HTML や Markdown などに変換する機能を提供します。"),c.a.createElement("p",null,"ipynb-loader もとい jupyter/nbconvert を使うにあたって HTML で出力するのか、それとも Markdown で出力するのか、という点が問題になりました。"),c.a.createElement("p",null,"HTML で出力する場合 Jupyter Notebook 特有の ",c.a.createElement("code",null,"In [1]")," というプロンプトを表示することができますが、その一方で LaTex 記法など一部の機能を使うことが難しくなります。",c.a.createElement("sup",{className:"footnote-ref",id:"fnref-1"},c.a.createElement("a",{href:"#fn-1"},"1"))),c.a.createElement("p",null,"Markdown として出力する場合 MDX と同じ処理ができるだけでなく、なんなら Jupyter Notebook がサポートしていないような Markdown 記法も使えるようになる点がメリットですが、入力と出力の対応関係が失われてしまうので Jupyter Notebook を表示している感が失われてしまいます。"),c.a.createElement("p",null,"結局 ipynb 形式でブログを書きたいときというのは、入力と出力の対応を明示したいときで、例えば LaTex を使いたいのであれば MDX 形式で書けばいいという結論に達し、 HTML で受けることにしました。"),c.a.createElement("h3",{id:"React-Component-にする"},"React Component にする",c.a.createElement("a",{className:"anchor-link",href:"#React-Component-にする"},"¶")),c.a.createElement("p",null,"Next.js は React Component を import することを期待するので、 Webpack の立場でいえば React Component を export するような文字列を生成する必要があります。"),c.a.createElement("p",null,"React Component を文字列として表現するには JSX が便利です。残念ながらこの目的を達成できる Webpack loader が見つからなかったので、  facebook が公開している ",c.a.createElement("a",{href:"https://www.npmjs.com/package/htmltojsx"},"htmltojsx")," という npm パッケージを使って自分で実装しました:"),c.a.createElement("div",{className:"highlight"},c.a.createElement("pre",null,c.a.createElement("span",null),c.a.createElement("span",{className:"kr"},"const")," ",c.a.createElement("span",{className:"nx"},"HTMLtoJSX")," ",c.a.createElement("span",{className:"o"},"=")," ",c.a.createElement("span",{className:"nx"},"require"),c.a.createElement("span",{className:"p"},"("),c.a.createElement("span",{className:"s2"},'"htmltojsx"'),c.a.createElement("span",{className:"p"},")"),"\n",c.a.createElement("span",{className:"kr"},"const")," ",c.a.createElement("span",{className:"nx"},"converter")," ",c.a.createElement("span",{className:"o"},"=")," ",c.a.createElement("span",{className:"k"},"new")," ",c.a.createElement("span",{className:"nx"},"HTMLtoJSX"),c.a.createElement("span",{className:"p"},"(","{")," ",c.a.createElement("span",{className:"nx"},"createClass"),c.a.createElement("span",{className:"o"},":")," ",c.a.createElement("span",{className:"kc"},"false")," ",c.a.createElement("span",{className:"p"},"}",")"),"\n","\n",c.a.createElement("span",{className:"nx"},"module"),c.a.createElement("span",{className:"p"},"."),c.a.createElement("span",{className:"nx"},"exports")," ",c.a.createElement("span",{className:"o"},"=")," ",c.a.createElement("span",{className:"kd"},"function")," ",c.a.createElement("span",{className:"p"},"("),c.a.createElement("span",{className:"nx"},"content"),c.a.createElement("span",{className:"p"},")")," ",c.a.createElement("span",{className:"p"},"{"),"\n","  ",c.a.createElement("span",{className:"c1"},"// content には ipynb-loader が返した HTML が入っている"),"\n","  ",c.a.createElement("span",{className:"k"},"return")," ",c.a.createElement("span",{className:"sb"},"`"),"\n",c.a.createElement("span",{className:"sb"},"  ",'import React from "react"'),"\n",c.a.createElement("span",{className:"sb"},"  ","export default () => "),c.a.createElement("span",{className:"si"},"$","{"),c.a.createElement("span",{className:"nx"},"converter"),c.a.createElement("span",{className:"p"},"."),c.a.createElement("span",{className:"nx"},"convert"),c.a.createElement("span",{className:"p"},"("),c.a.createElement("span",{className:"nx"},"content"),c.a.createElement("span",{className:"p"},")"),c.a.createElement("span",{className:"si"},"}"),c.a.createElement("span",{className:"sb"}),"\n",c.a.createElement("span",{className:"sb"},"  ","`"),"\n",c.a.createElement("span",{className:"p"},"}"),"\n")),c.a.createElement("h2",{id:"おわりに"},"おわりに",c.a.createElement("a",{className:"anchor-link",href:"#おわりに"},"¶")),c.a.createElement("p",null,"次の仕事では pyspark とか使ってがんがんデータ分析などをやる予定なので、その過程で得た知見をブログに公開してい着たいと思います。"),c.a.createElement("p",null,"余談として、今回初めて Webpack loader を書いてみましたが、思ったより簡単だったという印象です。今回の実装を通じて図らずも Webpack そのものに対する理解もだいぶ深まった気がするので、やってみるといいかも知れません。"),c.a.createElement("div",{className:"footnotes"},c.a.createElement("hr",null),c.a.createElement("ol",null,c.a.createElement("li",{id:"fn-1"},c.a.createElement("p",null,"Jupyter Notebook では LaTex 記法の実装に MathJax を使っていますが、このブログでは極力ブラウザ上では JSを走らせない方針にしているため。 MDX では ",c.a.createElement("a",{href:"https://www.npmjs.com/package/remark-math"},"remark-math")," と ",c.a.createElement("a",{href:"https://www.npmjs.com/package/rehype-katex"},"rehype-katex")," を使って実装しています。",c.a.createElement("a",{href:"#fnref-1",className:"footnote"},"↩")))))))))};function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t,a,n,r,l,c){try{var s=e[l](c),m=s.value}catch(e){return void a(e)}s.done?t(m):Promise.resolve(m).then(n,r)}function p(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}a.d(t,"default",function(){return d});var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,f(t).apply(this,arguments))}var n,l,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,c.a.Component),n=t,l=[{key:"render",value:function(){return c.a.createElement(s.b,{meta:this.props.meta},c.a.createElement(m,null))}}],o=[{key:"getInitialProps",value:function(){var e,t=(e=r.a.mark(function e(){var t,n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a(60),n=t.entries,e.abrupt("return",{meta:n["blog/2019/01/hello-ipynb"]});case 2:case"end":return e.stop()}},e,this)}),function(){var t=this,a=arguments;return new Promise(function(n,r){var l=e.apply(t,a);function c(e){i(l,n,r,c,s,"next",e)}function s(e){i(l,n,r,c,s,"throw",e)}c(void 0)})});return function(){return t.apply(this,arguments)}}()}],l&&p(n.prototype,l),o&&p(n,o),t}()}},[[378,1,0,2]]]);