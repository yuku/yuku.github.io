(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{123:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var a,r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=n(1),c=(a=o)&&a.__esModule?a:{default:a};var p=c.default.createContext({}),m=p.Provider,s=p.Consumer;t.withMDXComponents=function(e){return function(t){var n=t.components,a=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["components"]);return c.default.createElement(s,null,function(t){return c.default.createElement(e,r({components:n||t},a))})}};t.default=function(e){var t=e.components,n=e.children;return c.default.createElement(m,{value:t},n)}},381:function(e,t,n){__NEXT_REGISTER_PAGE("/blog/2019/01/hello-new-blog",function(){return e.exports=n(394),{page:e.exports.default}})},382:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=n(1),p=(a=c)&&a.__esModule?a:{default:a},m=n(123);var s={inlineCode:"code",wrapper:"div"},l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,c.Component),o(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,a=e.props,o=void 0===a?{}:a,c=e.children,m=e.components,l=void 0===m?{}:m,i=e.Layout,u=e.layoutProps,f=l[n+"."+t]||l[t]||s[t]||t;return i?p.default.createElement(i,r({components:l},u),p.default.createElement(f,o,c)):p.default.createElement(f,o,c)}}]),t}();t.default=(0,m.withMDXComponents)(l)},394:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(4),c=n(27),p=n.n(c),m=n(40),s=n(18),l=(n(383),function(e){return r.a.createElement("div",null,r.a.createElement(p.a,null,r.a.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/themes/prism.min.css"}),r.a.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.10.0/katex.min.css"})),r.a.createElement(s.a,{className:"mb-5 text-center text-white",backgroundImage:e.backgroundImage,style:{backgroundColor:e.backgroundColor}},r.a.createElement("h1",{className:"display-4 font-weight-bold"},e.title)),r.a.createElement(m.a,null,r.a.createElement("div",{className:"blogpage"},e.children)))}),i=n(28);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function g(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function b(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"meta",function(){return d}),n.d(t,"default",function(){return E});var d={title:"ブログを自作した背景と利用ツール",publishedAt:"2019-01-05T13:52:00+09:00",backgroundColor:i.a},E=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=b(this,h(t).call(this,e))).layout=function(e){var t=e.children;return r.a.createElement(l,d,t)},n}var n,a,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,r.a.Component),n=t,(a=[{key:"render",value:function(){var e=this.props,t=e.components,n=f(e,["components"]);return r.a.createElement(o.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:n,components:t},r.a.createElement(o.MDXTag,{name:"p",components:t},"新しくブログを自作する過程で技術的、経済的あるいは時間的な制約のもとにいろいろな選択をしました。この記事では将来自分がメンテナンス時に読むことを想定して、どういった制約があってその中でどういった選択をしたのか書きます。"),r.a.createElement(o.MDXTag,{name:"p",components:t},"免責条項: これが 2019 年にブログを自作するのに最適な構成であると主張するものではありません。"),r.a.createElement(o.MDXTag,{name:"h2",components:t},"背景、モチベーション"),r.a.createElement(o.MDXTag,{name:"p",components:t},"そもそも 2019 年にもなって何故ブログを自作する必要があるのでしょう。ブログを持つことが目的ならそのためのサービスを使えばいいのだから、実装しそれをメンテナンスしていくことそれ自体にも意味があるのは言うまでもありません。"),r.a.createElement(o.MDXTag,{name:"p",components:t},"長年 Web アプリケーションエンジニアとして仕事してきましたが、1 月末で転職し次の職場では若干 Web から遠ざかる予定でいます。ですが Web 標準や周辺技術のキャッチアップは続けたいと考えていて、そのキャッチアップした知識を実践する場所が欲しいと思い、このブログを作ることにしました。ブログサービスは便利な半面、自分で触れる領域に制約があるのでこの目的には合いません。"),r.a.createElement(o.MDXTag,{name:"p",components:t},"また 2 月からはデータサイエンスの立場から検索やレコメンデーションといった領域に取り組みます。これらの領域にも静的な文書や画像、表を用いた書籍やブログはたくさんありますが、せっかく自分は Web の技術を持っているのだからそれをいかして動的に内容を変更できるようなコンテンツを作れないかと考えました。そのためには自由に JavaScript を実行できる環境が必要で、かつそのコードを git 管理できなければいけません。また学んだレコメンデーションや検索の知識そのものを実践する場所としても使っていく予定です。"),r.a.createElement(o.MDXTag,{name:"h2",components:t},"制約"),r.a.createElement(o.MDXTag,{name:"p",components:t},"有給消化期間中に余裕を持って構築し、それでいて今後もメンテナンスし続けられることが重要です。そのためには今回のために一から新しい技術を学ぶのではなく、今自分の手元にある知識を活かせるものでなければ実現は難しいでしょう。それでいてすぐには廃れない、廃れたとしても乗り換えが容易な構成であることが望ましいです。"),r.a.createElement(o.MDXTag,{name:"p",components:t},"運用を容易にするためにもシンプルにサーバサイドは静的なファイルをホスティングするだけにします。かといって生の HTML / JavaScript / CSS を書いていくのはメンテナンスの観点からも無理があるので何かしらの静的サイトジェネレータは必要です。ブログなので文章がメインだけど、リッチコンテンツを組み込んでいきたいので文書と JavaScript の統合にサポートが必要です。"),r.a.createElement(o.MDXTag,{name:"p",components:t},"2019 年なので静的サイトと言えども HTTPS は必須としました。"),r.a.createElement(o.MDXTag,{name:"h2",components:t},"構成"),r.a.createElement(o.MDXTag,{name:"p",components:t},"以上を踏まえて次のような構成にしました:"),r.a.createElement(o.MDXTag,{name:"ul",components:t},r.a.createElement(o.MDXTag,{name:"li",components:t,parentName:"ul"},r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://pages.github.com/"}},"GitHub Pages")," でホスティング"),r.a.createElement(o.MDXTag,{name:"li",components:t,parentName:"ul"},r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://travis-ci.org/"}},"Travis CI")," の ",r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://docs.travis-ci.com/user/deployment/pages/"}},"GitHub Pages Deployment")," を使ってデプロイ"),r.a.createElement(o.MDXTag,{name:"li",components:t,parentName:"ul"},"静的サイトジェネレータとして ",r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://nextjs.org/"}},"Next.js")," を使う"),r.a.createElement(o.MDXTag,{name:"li",components:t,parentName:"ul"},"ブログコンテンツは ",r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://mdxjs.com/"}},"MDX")," で記述する")),r.a.createElement(o.MDXTag,{name:"h3",components:t},"ホスティングサービス"),r.a.createElement(o.MDXTag,{name:"p",components:t},"GitHub Pages は GitHub と統合された静的ファイルのホスティングサービスです。",r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://blog.github.com/2018-05-01-github-pages-custom-domains-https/"}},"最近ついにカスタムドメインも HTTPS がサポートされました"),"。"),r.a.createElement(o.MDXTag,{name:"p",components:t},r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://www.netlify.com/"}},"Netlify")," など静的なファイルをホスティングするだけなら他にもいろいろな選択肢がありますが、 GitHub の他のプロジェクトページもブログと同じドメインでホスティングしたかったのと単純に使い慣れているので GitHub Pages を使うことにしました。"),r.a.createElement(o.MDXTag,{name:"h3",components:t},"デプロイ自動化"),r.a.createElement(o.MDXTag,{name:"p",components:t},"GitHub Pages を使うのでデプロイは GitHub への git push で行われます。この作業を自動化するために CI サービスとして Travis CI と ",r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://circleci.com/"}},"CircleCI")," を検討しました。どちらかといえば使い慣れているのは CircleCI でしたが、 GitHub Pages Deployment というそのものズバリの機能が使えるので Travis CI を採用しました。"),r.a.createElement(o.MDXTag,{name:"p",components:t},"GitHub の yuku/yuku.github.io リポジトリの workspace ブランチに push すると Travis CI から自動的にデプロイされます。"),r.a.createElement(o.MDXTag,{name:"h3",components:t},"静的サイトジェネレータ"),r.a.createElement(o.MDXTag,{name:"p",components:t},"手元の知識を活かすためにクライアントサイド JavaScript では ",r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://reactjs.org/"}},"React")," を使うことを決めていたので Next.js と ",r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://www.gatsbyjs.org/"}},"Gatsby")," を検討しました。"),r.a.createElement(o.MDXTag,{name:"p",components:t},"Gatsby は静的サイトにより特化している雰囲気がある点が魅力的でしたが、 Next.js も static export 機能を使って ",r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://nextjs.org"}},"https://nextjs.org")," を",r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://www.reddit.com/r/reactjs/comments/992n2r/next_vs_gatsby/e4lrffl/"}},"作っている"),"ので突然サポートを終了するとは考えにくく、結局"),r.a.createElement(o.MDXTag,{name:"ul",components:t},r.a.createElement(o.MDXTag,{name:"li",components:t,parentName:"ul"},"過去に少し触ったことがある"),r.a.createElement(o.MDXTag,{name:"li",components:t,parentName:"ul"},"ドキュメントが読みやすかった")),r.a.createElement(o.MDXTag,{name:"p",components:t},"という理由で Next.js にしました。"),r.a.createElement(o.MDXTag,{name:"p",components:t},r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://www.npmtrends.com/gatsby-vs-next"}},r.a.createElement(o.MDXTag,{name:"img",components:t,parentName:"a",props:{src:"/static/images/2019/01/next-vs-gatsby.png",alt:"Next.js vs Gatsby"}}))),r.a.createElement(o.MDXTag,{name:"p",components:t},"npm パッケージのダウンロード数や開発の活発さの比較では両者の違いはあまりなさそうでした。"),r.a.createElement(o.MDXTag,{name:"h3",components:t},"MDX"),r.a.createElement(o.MDXTag,{name:"p",components:t},"ブログコンテンツの中で JavaScript を使おうとすると、本文のテキストデータと JavaScript のコードをどのように連携されるのかが問題になります。記事自体は Markdown で書くとして、 Markdown の中で ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<script>")," を書くの避けたいです。"),r.a.createElement(o.MDXTag,{name:"p",components:t},"MDX とは Markdown の中で JSX を使えうようにしたフォーマットです。 MDX を使うと JSX 記法が書かれた場所に対応する React コンポーネントがマウント自動的にマウントされます。広く普及しているツールではありませんが、 Next.js を開発している ZEIT が開発しているのでその点は安心感があります。仮に MDX 記法が仮に使えなくなったとしてもそれまで JSX を書いていた場所に DOM 要素を作り、それに対して React コンポーネントを明示的にマウントするようにすればいいだけなので移行するのは比較的簡単です。"),r.a.createElement(o.MDXTag,{name:"h2",components:t},"おわりに"),r.a.createElement(o.MDXTag,{name:"p",components:t},"ブログを自作することにした理由と、選択したツールについて簡単にまとめました。冒頭でも書いたように、これが万人に対しておすすめできる構成とは考えていませんが、未来の自分を含むどこかの誰かの参考になれば幸いです。"))}}])&&g(n.prototype,a),c&&g(n,c),t}()},4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(382);Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return o(a).default}});var r=n(123);function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return o(r).default}})}},[[381,1,0,2]]]);