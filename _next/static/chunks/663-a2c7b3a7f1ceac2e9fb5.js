(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[663],{3905:function(e,t,i){"use strict";i.d(t,{kt:function(){return p}});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),i=t;return e&&(i="function"===typeof e?e(t):s(s({},t),e)),i},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),p=c(i),u=r,h=p["".concat(l,".").concat(u)]||p[u]||d[u]||o;return i?n.createElement(h,s(s({ref:t},m),{},{components:i})):n.createElement(h,s({ref:t},m))}));function p(e,t){var i=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var o=i.length,s=new Array(o);s[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"===typeof e?e:r,s[1]=a;for(var c=2;c<o;c++)s[c]=i[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},405:function(e,t,i){"use strict";i.r(t),i.d(t,{entries:function(){return n}});var n={"blog/2020/07/connect-to-a-resource-behind-a-k9s-cluster-from-local-machine":{title:"Connect to a Resource Behind a k8s Cluster From Local Machine",description:"Sometimes, especially in production environment, resources such as databases are only accessable from a k8s cluster for security purposes and cannot be accessed directly from your local machine. In this case, if you want to access the resource from your local machine, you need to create a tunnel service in the cluster. This blog post explains how to create a such service.",format:"mdx",publishedAt:"2020-07-25T22:42:00+09:00",modifiedAt:"2020-07-25T22:49:00+09:00",tags:["k8s"]},"blog/2020/01/poisson-generalized-linear-model":{description:"\u67b6\u7a7a\u690d\u7269\u306e\u30c7\u30fc\u30bf\u3092\u4e00\u822c\u5316\u7dda\u5f62\u30e2\u30c7\u30eb\u3067\u3042\u308b\u30dd\u30a2\u30bd\u30f3\u56de\u5e30\u3092\u7528\u3044\u3066\u30e2\u30c7\u30ea\u30f3\u30b0\u3059\u308b\u3002",format:"ipynb",publishedAt:"2020-01-18T10:54:00+09:00",modifiedAt:"2020-01-18T11:25:00+09:00",tags:["julia"],title:"\u4e00\u822c\u5316\u7dda\u5f62\u30e2\u30c7\u30eb - \u30dd\u30a2\u30bd\u30f3\u56de\u5e30"},"blog/2020/01/maximum-likelihood-estimation-of-probability-distribution-and-statistical-model":{description:"\u67b6\u7a7a\u306e\u690d\u7269\u306e\u96c6\u56e3\u3092\u8abf\u67fb\u3057\u3066\u5f97\u3089\u308c\u305f\u30c7\u30fc\u30bf\u3092\u8aac\u660e\u3059\u308b\u305f\u3081\u306b\u30dd\u30a2\u30bd\u30f3\u5206\u5e03\u3092\u3042\u3066\u306f\u3081\u3001\u6700\u5c24\u63a8\u5b9a\u3092\u7528\u3044\u3066\u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u63a8\u5b9a\u3092\u884c\u3046\u3002",format:"ipynb",publishedAt:"2020-01-13T00:52:00+09:00",tags:["julia"],title:"\u78ba\u7387\u5206\u5e03\u3068\u7d71\u8a08\u30e2\u30c7\u30eb\u306e\u6700\u5c24\u63a8\u5b9a"},"blog/2020/01/als-for-matrix-factorization":{description:"\u5354\u8abf\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u3067\u5e83\u304f\u4f7f\u308f\u308c\u308b MF \u306e\u5b9f\u88c5\u306e\u4e00\u3064\u3067\u3042\u308b ALS \u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u306e\u6570\u5b66\u7684\u306a\u80cc\u666f\u3092\u78ba\u8a8d\u3057\u3001 Julia \u3092\u4f7f\u3063\u3066\u5b9f\u88c5\u3059\u308b\u3002",format:"ipynb",publishedAt:"2020-01-06T10:09:00+09:00",modifiedAt:"2020-01-06T10:33:00+09:00",tags:["julia"],title:"Matrix Factorization \u306e\u305f\u3081\u306e ALS \u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u306e\u6570\u7406\u3068\u5b9f\u88c5"},"blog/2019/10/github-actions":{description:"\u30d6\u30ed\u30b0\u306e CI/CD \u3092 CircleCI \u304b\u3089 GitHub Actions \u306b\u79fb\u884c\u3057\u3066\u307f\u3066\u306e\u6240\u611f\u306a\u3069\u3002",format:"mdx",publishedAt:"2019-10-13T23:57:00+09:00",tags:["Blog dev"],title:"GitHub Actions \u306b\u79fb\u884c\u3057\u305f"},"blog/2019/08/rss-feed":{description:"\u30d6\u30ed\u30b0\u306b RSS \u30d5\u30a3\u30fc\u30c9\u3092\u5b9f\u88c5\u3057\u307e\u3057\u305f\u3002",format:"mdx",publishedAt:"2019-08-30T19:10:00+09:00",tags:["Blog dev"],title:"RSS \u30d5\u30a3\u30fc\u30c9\u3092\u5b9f\u88c5\u3057\u305f"},"blog/2019/08/ipynb-without-python":{description:"Python \u3092\u4f7f\u308f\u305a\u306b Jupyter Notebook \u5f62\u5f0f\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u307e\u3057\u305f\u3002",format:"mdx",publishedAt:"2019-08-18T19:10:00+09:00",tags:["Blog dev"],title:"\u30d6\u30ed\u30b0\u306e\u30d3\u30eb\u30c9\u74b0\u5883\u304b\u3089 Python \u3092\u6392\u9664\u3057\u305f"},"blog/2019/06/why-i-joined-flywheel":{description:"\u4f55\u3092\u9b45\u529b\u306b\u611f\u3058\u3066 FLYWHEEL \u306b\u5165\u793e\u3057\u3088\u3046\u3068\u6c7a\u3081\u305f\u306e\u304b\u306e\u8a18\u9332\u3067\u3059\u3002",format:"mdx",modifiedAt:"2019-06-18T09:52:00+09:00",publishedAt:"2019-06-17T22:28:00+09:00",tags:["essay"],title:"\u306a\u305c FLYWHEEL \u306b\u5165\u793e\u3057\u305f\u306e\u304b"},"blog/2019/04/pyspark-ml-vs-mllib":{description:"",format:"mdx",publishedAt:"2019-04-22T00:04:00+09:00",tags:["pyspark"],title:"Which should I use, pyspark.ml or pyspark.mllib?"},"blog/2019/01/authorize-iap-by-nodejs":{description:"This post explains how to use google-auth-library to authenticate and access resources protected by Cloud IAP with Node.js.",format:"mdx",publishedAt:"2019-01-28T14:54:00+09:00",modifiedAt:"2020-07-26T17:29:00+09:00",tags:["GCP"],title:"Access a Cloud IAP-Protected Resource With Node.js"},"blog/2019/01/grpc-proxy-for-grpc-web":{description:"In order for gRPC to communicate with gRPC-Web, you need to set up a proxy, such as Envoy. This article describes why gRPC-Web needs a proxy.",format:"mdx",loadTwitterWidget:!0,modifiedAt:"2019-01-25T23:26:00+09:00",publishedAt:"2019-01-25T22:30:00+09:00",tags:["gRPC"],title:"Why gRPC-Web Needs Proxy"},"blog/2019/01/deploy-app-engine-from-circleci":{description:"How to deploy ann app running on AppEngine Node.js standard environment using CircleCI",format:"mdx",modifiedAt:"2019-01-20T09:33:00+09:00",publishedAt:"2019-01-18T14:00:00+09:00",tags:["GCP"],title:"Deploy AppEngine Apps Using CircleCI"},"blog/2019/01/google-cloud-sdk-in-docker":{description:"This article explains how to install and use the Google Cloud SDK in Docker rather than on the local machine.",format:"mdx",modifiedAt:"2020-05-30T09:21:13+09:00",publishedAt:"2019-01-17T14:43:00+09:00",tags:["GCP"],title:"How to Use Google Cloud SDK Using Docker"},"blog/2019/01/hello-pyspark":{description:"An introduction to pyspark using the Docker image environment provided by Jupyter Lab.",format:"ipynb",modifiedAt:"2020-05-30T08:34:49+09:00",publishedAt:"2019-01-16T20:50:00+09:00",tags:["pyspark"],title:"Getting Started With Pyspark Using Docker"},"blog/2019/01/hello-ipynb":{description:"Jupyter Notebook can now be displayed on this blog. I'm going to use it to publish my study records of machine learning and data analysis. This article describes the details of the implementation.",format:"ipynb",modifiedAt:"2020-05-30T00:43:29+09:00",publishedAt:"2019-01-15T20:17:00+09:00",tags:["Blog dev"],title:"Display Jupyter Notebook on Next.js"},"blog/2019/01/twitter-card-and-ogp":{description:"Twitter Card and Open Graph Protocol are now supported on the blog.",format:"mdx",loadTwitterWidget:!0,modifiedAt:"2020-05-29T23:41:46+09:00",publishedAt:"2019-01-07T22:40:00+09:00",tags:["Blog dev"],title:"Twitter Card and OGP Support"},"blog/2019/01/hello-new-blog":{description:"It's 2019 and I've created a new blog of my own. I will explain the motivation and the background of the selection of the tools I used.",format:"mdx",modifiedAt:"2020-05-24T16:15:21+09:00",ogImage:"https://yuku.takahashi.coffee/static/images/2019/01/next-vs-gatsby.png",publishedAt:"2019-01-05T13:52:00+09:00",tags:["Blog dev"],title:"Background on Blog Homebrewing and Tool Selection in 2019"}}},7871:function(e,t,i){"use strict";i.d(t,{i:function(){return b},a:function(){return y}});var n=i(5893),r=i(7294),o=i(9008),s=i(1664),a=i(1163),l=i(4184),c=i.n(l),d=i(381),m=i.n(d),p=i(7814),u=i(4007),h=function(e){return(0,n.jsxs)("aside",{className:c()("widget mb-4",e.className),children:[(0,n.jsx)("h1",{className:"title font-weight-bold",children:e.title}),e.children]})},f=function(e){return e||"https://yuku.takahashi.coffee".concat(u.hs)},g=(0,a.withRouter)((function(e){return(0,n.jsxs)("div",{className:"blogpage container",children:[(0,n.jsxs)(o.default,{children:[(0,n.jsxs)("title",{children:[e.meta.title," - ",u.px]}),(0,n.jsx)("meta",{name:"description",content:e.meta.description}),(0,n.jsx)("meta",{name:"twitter:card",content:"summary"}),(0,n.jsx)("meta",{name:"twitter:creator",content:"@yuku_t"}),(0,n.jsx)("meta",{property:"fb:app_id",content:u.f6}),(0,n.jsx)("meta",{property:"og:title",content:"".concat(e.meta.title," - ").concat(u.px)}),(0,n.jsx)("meta",{property:"og:type",content:"article"}),(0,n.jsx)("meta",{property:"og:url",content:"https://yuku.takahashi.coffee".concat(e.router.pathname)}),(0,n.jsx)("meta",{property:"og:image",content:f()}),(0,n.jsx)("meta",{property:"og:description",content:e.meta.description}),(0,n.jsx)("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/themes/prism.min.css"}),(0,n.jsx)("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.10.0/katex.min.css"})]}),(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("main",{className:c()("col-xl-8",e.className),children:(0,n.jsxs)("article",{itemScope:!0,itemType:"http://schema.org/BlogPosting",children:[(0,n.jsx)("meta",{itemProp:"author",content:"Yuku Takahashi"}),(0,n.jsx)("meta",{itemProp:"datePublished",content:e.meta.publishedAt}),e.meta.modifiedAt&&(0,n.jsx)("meta",{itemProp:"dateModified",content:e.meta.modifiedAt}),(0,n.jsx)("meta",{itemProp:"image",content:f()}),(0,n.jsxs)("header",{className:"mb-4 header",children:[(0,n.jsx)("h1",{className:"headline",itemProp:"headline",children:e.meta.title}),(0,n.jsxs)("ul",{className:"list-inline text-dark font-weight-light",children:[(0,n.jsx)("li",{className:"list-inline-item",children:(0,n.jsx)("span",{className:"ml-1",children:m()(e.meta.publishedAt).format("YYYY-MM-DD HH:mm")})}),(0,n.jsx)("li",{className:"list-inline-item",children:e.meta.tags.map((function(e,t){return[t>0?",":null,(0,n.jsxs)("span",{className:"ml-1",children:["#",e]},t)]}))})]})]}),(0,n.jsx)("section",{className:"mb-4 body",itemProp:"articleBody",children:e.children})]})}),(0,n.jsx)("div",{className:"col-xl-4",children:(0,n.jsxs)("div",{className:"pl-xl-2",children:[(0,n.jsx)(h,{title:"About Me",children:(0,n.jsxs)("div",{children:[(0,n.jsx)("img",{src:u.hs,alt:"avatar",className:"avatar rounded-circle mb-4 mx-auto d-block"}),(0,n.jsxs)("p",{children:["Software Engineer at FLYWHEEL. Working mainly on recommendation systems in these days. Ex-Qiita CTO.",(0,n.jsx)(s.default,{href:"/about",children:(0,n.jsx)("a",{href:"/about",style:{marginLeft:"4px"},children:"Read more"})}),"."]})]})}),(0,n.jsx)(h,{title:"Follow",children:(0,n.jsxs)("ul",{className:"list-inline icons",children:[(0,n.jsx)("li",{className:"list-inline-item",children:(0,n.jsx)("a",{href:"https://twitter.com/yuku_t",children:(0,n.jsxs)("span",{className:"fa-stack fa-lg",children:[(0,n.jsx)(p.G,{icon:"circle",className:"fa-stack-2x"}),(0,n.jsx)(p.G,{icon:["fab","twitter"],inverse:!0,className:"fa-stack-1x"})]})})}),(0,n.jsx)("li",{className:"list-inline-item",children:(0,n.jsx)("a",{href:"https://github.com/yuku",children:(0,n.jsxs)("span",{className:"fa-stack fa-lg",children:[(0,n.jsx)(p.G,{icon:"circle",className:"fa-stack-2x"}),(0,n.jsx)(p.G,{icon:["fab","github"],inverse:!0,className:"fa-stack-1x"})]})})}),(0,n.jsx)("li",{className:"list-inline-item",children:(0,n.jsx)("a",{href:"/static/rss-feed.xml",children:(0,n.jsxs)("span",{className:"fa-stack fa-lg",children:[(0,n.jsx)(p.G,{icon:"circle",className:"fa-stack-2x"}),(0,n.jsx)(p.G,{icon:"rss",inverse:!0,className:"fa-stack-1x"})]})})})]})})]})})]})]})})),b=function(e){var t=e.meta,i=e.children;return(0,r.useEffect)((function(){if(t.loadTwitterWidget){var e=document.createElement("script");e.async=!0,e.src="https://platform.twitter.com/widgets.js",e.charset="utf-8",document.body.appendChild(e)}}),[]),(0,n.jsx)(g,{className:"mdx",meta:t,children:i})},y=function(e){return(0,n.jsx)(g,{className:"notebook",meta:e.meta,children:e.children})}},5311:function(e,t,i){"use strict";function n(e,t,i,n,r,o,s){try{var a=e[o](s),l=a.value}catch(c){return void i(c)}a.done?t(l):Promise.resolve(l).then(n,r)}function r(e){return function(){var t=this,i=arguments;return new Promise((function(r,o){var s=e.apply(t,i);function a(e){n(s,r,o,a,l,"next",e)}function l(e){n(s,r,o,a,l,"throw",e)}a(void 0)}))}}i.d(t,{Z:function(){return r}})},8347:function(e,t,i){"use strict";function n(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}i.d(t,{Z:function(){return n}})}}]);