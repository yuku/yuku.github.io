(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"5mEE":function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/2019/01/hello-new-blog",function(){var t=a("fkcP");return{page:t.default||t}}])},fkcP:function(t,e,a){"use strict";a.r(e);var c=a("ln6h"),n=a.n(c),r=a("O40h"),p=a("0iUn"),l=a("sLSF"),b=a("MI3g"),j=a("a7VT"),s=a("Tit0"),u=a("q1tI"),i=a.n(u),O=a("Yp5c"),o=a("kOwS"),m=a("qNsG"),h=a("E/Ix"),g=(i.a.createElement,{}),f="wrapper";function N(t){var e=t.components,a=Object(m.a)(t,["components"]);return Object(h.a)(f,Object(o.a)({},g,a,{components:e,mdxType:"MDXLayout"}),Object(h.a)("p",null,"\u65b0\u3057\u304f\u30d6\u30ed\u30b0\u3092\u81ea\u4f5c\u3059\u308b\u904e\u7a0b\u3067\u6280\u8853\u7684\u3001\u7d4c\u6e08\u7684\u3042\u308b\u3044\u306f\u6642\u9593\u7684\u306a\u5236\u7d04\u306e\u3082\u3068\u306b\u3044\u308d\u3044\u308d\u306a\u9078\u629e\u3092\u3057\u307e\u3057\u305f\u3002\u3053\u306e\u8a18\u4e8b\u3067\u306f\u5c06\u6765\u81ea\u5206\u304c\u30e1\u30f3\u30c6\u30ca\u30f3\u30b9\u6642\u306b\u8aad\u3080\u3053\u3068\u3092\u60f3\u5b9a\u3057\u3066\u3001\u3069\u3046\u3044\u3063\u305f\u5236\u7d04\u304c\u3042\u3063\u3066\u305d\u306e\u4e2d\u3067\u3069\u3046\u3044\u3063\u305f\u9078\u629e\u3092\u3057\u305f\u306e\u304b\u66f8\u304d\u307e\u3059\u3002"),Object(h.a)("p",null,"\u6ce8\u610f: \u3053\u308c\u304c 2019 \u5e74\u306b\u30d6\u30ed\u30b0\u3092\u81ea\u4f5c\u3059\u308b\u306e\u306b\u6700\u9069\u306a\u69cb\u6210\u3067\u3042\u308b\u3068\u4e3b\u5f35\u3059\u308b\u3082\u306e\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002"),Object(h.a)("h2",null,"TL;DR"),Object(h.a)("ul",null,Object(h.a)("li",{parentName:"ul"},"\u8ee2\u8077\u5f8c\u306b\u30ad\u30e3\u30c3\u30c1\u30a2\u30c3\u30d7\u3057\u305f Web \u6280\u8853\u3092\u5b9f\u8df5\u3057\u305f\u308a\u3001\u30ec\u30b3\u30e1\u30f3\u30c7\u30fc\u30b7\u30e7\u30f3\u6a5f\u80fd\u3092\u5b9f\u88c5\u3059\u308b\u5834\u6240\u304c\u6b32\u3057\u304f\u3066\u30d6\u30ed\u30b0\u3092\u4f5c\u308b\u3053\u3068\u306b\u3057\u305f\u3002"),Object(h.a)("li",{parentName:"ul"},Object(h.a)("a",Object(o.a)({parentName:"li"},{href:"https://pages.github.com/"}),"GitHub Pages")," \u4e0a\u306b\u30c7\u30d7\u30ed\u30a4\u3055\u308c\u3066\u304a\u308a\u3001 ",Object(h.a)("a",Object(o.a)({parentName:"li"},{href:"https://nextjs.org/"}),"Next.js")," \u3092\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u3068\u3057\u3066\u4f7f\u3063\u3066\u3044\u308b\u3002\u8a18\u4e8b\u306f Markdown \u306e\u4e2d\u306b JSX \u3092\u66f8\u3051\u308b\u3088\u3046\u306b\u3057\u305f ",Object(h.a)("a",Object(o.a)({parentName:"li"},{href:"https://mdxjs.com/"}),"MDX")," \u8a18\u6cd5\u3092\u4f7f\u3063\u3066\u66f8\u3044\u3066\u3044\u308b\u3002")),Object(h.a)("h2",null,"\u80cc\u666f\u3001\u30e2\u30c1\u30d9\u30fc\u30b7\u30e7\u30f3"),Object(h.a)("p",null,"\u305d\u3082\u305d\u3082 2019 \u5e74\u306b\u3082\u306a\u3063\u3066\u4f55\u6545\u30d6\u30ed\u30b0\u3092\u81ea\u4f5c\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u306e\u3067\u3057\u3087\u3046\u3002\u30d6\u30ed\u30b0\u3092\u6301\u3064\u3053\u3068\u304c\u76ee\u7684\u306a\u3089\u305d\u306e\u305f\u3081\u306e\u30b5\u30fc\u30d3\u30b9\u3092\u4f7f\u3048\u3070\u3044\u3044\u306e\u3060\u304b\u3089\u3001\u5b9f\u88c5\u3057\u305d\u308c\u3092\u30e1\u30f3\u30c6\u30ca\u30f3\u30b9\u3057\u3066\u3044\u304f\u3053\u3068\u305d\u308c\u81ea\u4f53\u306b\u3082\u610f\u5473\u304c\u3042\u308b\u306e\u306f\u8a00\u3046\u307e\u3067\u3082\u3042\u308a\u307e\u305b\u3093\u3002"),Object(h.a)("p",null,"\u9577\u5e74 Web \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30a8\u30f3\u30b8\u30cb\u30a2\u3068\u3057\u3066\u4ed5\u4e8b\u3057\u3066\u304d\u307e\u3057\u305f\u304c\u30011 \u6708\u672b\u3067\u8ee2\u8077\u3057\u6b21\u306e\u8077\u5834\u3067\u306f\u82e5\u5e72 Web \u304b\u3089\u9060\u3056\u304b\u308b\u4e88\u5b9a\u3067\u3044\u307e\u3059\u3002\u3067\u3059\u304c Web \u6a19\u6e96\u3084\u5468\u8fba\u6280\u8853\u306e\u30ad\u30e3\u30c3\u30c1\u30a2\u30c3\u30d7\u306f\u7d9a\u3051\u305f\u3044\u3068\u8003\u3048\u3066\u3044\u3066\u3001\u305d\u306e\u30ad\u30e3\u30c3\u30c1\u30a2\u30c3\u30d7\u3057\u305f\u77e5\u8b58\u3092\u5b9f\u8df5\u3059\u308b\u5834\u6240\u304c\u6b32\u3057\u3044\u3068\u601d\u3044\u3001\u3053\u306e\u30d6\u30ed\u30b0\u3092\u4f5c\u308b\u3053\u3068\u306b\u3057\u307e\u3057\u305f\u3002\u30d6\u30ed\u30b0\u30b5\u30fc\u30d3\u30b9\u306f\u4fbf\u5229\u306a\u534a\u9762\u3001\u81ea\u5206\u3067\u89e6\u308c\u308b\u9818\u57df\u306b\u5236\u7d04\u304c\u3042\u308b\u306e\u3067\u3053\u306e\u76ee\u7684\u306b\u306f\u5408\u3044\u307e\u305b\u3093\u3002"),Object(h.a)("p",null,"\u307e\u305f 2 \u6708\u304b\u3089\u306f\u30c7\u30fc\u30bf\u30b5\u30a4\u30a8\u30f3\u30b9\u306e\u7acb\u5834\u304b\u3089\u691c\u7d22\u3084\u30ec\u30b3\u30e1\u30f3\u30c7\u30fc\u30b7\u30e7\u30f3\u3068\u3044\u3063\u305f\u9818\u57df\u306b\u53d6\u308a\u7d44\u307f\u307e\u3059\u3002\u3053\u308c\u3089\u306e\u9818\u57df\u306b\u3082\u9759\u7684\u306a\u6587\u66f8\u3084\u753b\u50cf\u3001\u8868\u3092\u7528\u3044\u305f\u66f8\u7c4d\u3084\u30d6\u30ed\u30b0\u306f\u305f\u304f\u3055\u3093\u3042\u308a\u307e\u3059\u304c\u3001\u305b\u3063\u304b\u304f\u81ea\u5206\u306f Web \u306e\u6280\u8853\u3092\u6301\u3063\u3066\u3044\u308b\u306e\u3060\u304b\u3089\u305d\u308c\u3092\u3044\u304b\u3057\u3066\u52d5\u7684\u306b\u5185\u5bb9\u3092\u5909\u66f4\u3067\u304d\u308b\u3088\u3046\u306a\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u4f5c\u308c\u306a\u3044\u304b\u3068\u8003\u3048\u307e\u3057\u305f\u3002\u305d\u306e\u305f\u3081\u306b\u306f\u81ea\u7531\u306b JavaScript \u3092\u5b9f\u884c\u3067\u304d\u308b\u74b0\u5883\u304c\u5fc5\u8981\u3067\u3001\u304b\u3064\u305d\u306e\u30b3\u30fc\u30c9\u3092 git \u7ba1\u7406\u3067\u304d\u306a\u3051\u308c\u3070\u3044\u3051\u307e\u305b\u3093\u3002\u307e\u305f\u5b66\u3093\u3060\u30ec\u30b3\u30e1\u30f3\u30c7\u30fc\u30b7\u30e7\u30f3\u3084\u691c\u7d22\u306e\u77e5\u8b58\u305d\u306e\u3082\u306e\u3092\u5b9f\u8df5\u3059\u308b\u5834\u6240\u3068\u3057\u3066\u3082\u4f7f\u3063\u3066\u3044\u304f\u4e88\u5b9a\u3067\u3059\u3002"),Object(h.a)("h2",null,"\u5236\u7d04"),Object(h.a)("p",null,"\u6709\u7d66\u6d88\u5316\u671f\u9593\u4e2d\u306b\u4f59\u88d5\u3092\u6301\u3063\u3066\u69cb\u7bc9\u3057\u3001\u305d\u308c\u3067\u3044\u3066\u4eca\u5f8c\u3082\u30e1\u30f3\u30c6\u30ca\u30f3\u30b9\u3057\u7d9a\u3051\u3089\u308c\u308b\u3053\u3068\u304c\u91cd\u8981\u3067\u3059\u3002\u305d\u306e\u305f\u3081\u306b\u306f\u4eca\u56de\u306e\u305f\u3081\u306b\u4e00\u304b\u3089\u65b0\u3057\u3044\u6280\u8853\u3092\u5b66\u3076\u306e\u3067\u306f\u306a\u304f\u3001\u4eca\u81ea\u5206\u306e\u624b\u5143\u306b\u3042\u308b\u77e5\u8b58\u3092\u6d3b\u304b\u305b\u308b\u3082\u306e\u3067\u306a\u3051\u308c\u3070\u5b9f\u73fe\u306f\u96e3\u3057\u3044\u3067\u3057\u3087\u3046\u3002\u305d\u308c\u3067\u3044\u3066\u3059\u3050\u306b\u306f\u5ec3\u308c\u306a\u3044\u3001\u5ec3\u308c\u305f\u3068\u3057\u3066\u3082\u4e57\u308a\u63db\u3048\u304c\u5bb9\u6613\u306a\u69cb\u6210\u3067\u3042\u308b\u3053\u3068\u304c\u671b\u307e\u3057\u3044\u3067\u3059\u3002"),Object(h.a)("p",null,"\u904b\u7528\u3092\u5bb9\u6613\u306b\u3059\u308b\u305f\u3081\u306b\u3082\u30b7\u30f3\u30d7\u30eb\u306b\u30b5\u30fc\u30d0\u30b5\u30a4\u30c9\u306f\u9759\u7684\u306a\u30d5\u30a1\u30a4\u30eb\u3092\u30db\u30b9\u30c6\u30a3\u30f3\u30b0\u3059\u308b\u3060\u3051\u306b\u3057\u307e\u3059\u3002\u304b\u3068\u3044\u3063\u3066\u751f\u306e HTML / JavaScript / CSS \u3092\u66f8\u3044\u3066\u3044\u304f\u306e\u306f\u30e1\u30f3\u30c6\u30ca\u30f3\u30b9\u306e\u89b3\u70b9\u304b\u3089\u3082\u7121\u7406\u304c\u3042\u308b\u306e\u3067\u4f55\u304b\u3057\u3089\u306e\u9759\u7684\u30b5\u30a4\u30c8\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u306f\u5fc5\u8981\u3067\u3059\u3002\u30d6\u30ed\u30b0\u306a\u306e\u3067\u6587\u7ae0\u304c\u30e1\u30a4\u30f3\u3060\u3051\u3069\u3001\u30ea\u30c3\u30c1\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u7d44\u307f\u8fbc\u3093\u3067\u3044\u304d\u305f\u3044\u306e\u3067\u6587\u66f8\u3068 JavaScript \u306e\u7d71\u5408\u306b\u30b5\u30dd\u30fc\u30c8\u304c\u5fc5\u8981\u3067\u3059\u3002"),Object(h.a)("p",null,"2019 \u5e74\u306a\u306e\u3067\u9759\u7684\u30b5\u30a4\u30c8\u3068\u8a00\u3048\u3069\u3082 HTTPS \u306f\u5fc5\u9808\u3068\u3057\u307e\u3057\u305f\u3002"),Object(h.a)("h2",null,"\u69cb\u6210"),Object(h.a)("p",null,"\u4ee5\u4e0a\u3092\u8e0f\u307e\u3048\u3066\u6b21\u306e\u3088\u3046\u306a\u69cb\u6210\u306b\u3057\u307e\u3057\u305f:"),Object(h.a)("ul",null,Object(h.a)("li",{parentName:"ul"},Object(h.a)("a",Object(o.a)({parentName:"li"},{href:"https://pages.github.com/"}),"GitHub Pages")," \u3067\u30db\u30b9\u30c6\u30a3\u30f3\u30b0"),Object(h.a)("li",{parentName:"ul"},Object(h.a)("a",Object(o.a)({parentName:"li"},{href:"https://travis-ci.org/"}),"Travis CI")," \u306e ",Object(h.a)("a",Object(o.a)({parentName:"li"},{href:"https://docs.travis-ci.com/user/deployment/pages/"}),"GitHub Pages Deployment")," \u3092\u4f7f\u3063\u3066\u30c7\u30d7\u30ed\u30a4"),Object(h.a)("li",{parentName:"ul"},"\u9759\u7684\u30b5\u30a4\u30c8\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u3068\u3057\u3066 ",Object(h.a)("a",Object(o.a)({parentName:"li"},{href:"https://nextjs.org/"}),"Next.js")," \u3092\u4f7f\u3046"),Object(h.a)("li",{parentName:"ul"},"\u30d6\u30ed\u30b0\u30b3\u30f3\u30c6\u30f3\u30c4\u306f ",Object(h.a)("a",Object(o.a)({parentName:"li"},{href:"https://mdxjs.com/"}),"MDX")," \u3067\u8a18\u8ff0\u3059\u308b")),Object(h.a)("h3",null,"\u30db\u30b9\u30c6\u30a3\u30f3\u30b0\u30b5\u30fc\u30d3\u30b9"),Object(h.a)("p",null,"GitHub Pages \u306f GitHub \u3068\u7d71\u5408\u3055\u308c\u305f\u9759\u7684\u30d5\u30a1\u30a4\u30eb\u306e\u30db\u30b9\u30c6\u30a3\u30f3\u30b0\u30b5\u30fc\u30d3\u30b9\u3067\u3059\u3002",Object(h.a)("a",Object(o.a)({parentName:"p"},{href:"https://blog.github.com/2018-05-01-github-pages-custom-domains-https/"}),"\u6700\u8fd1\u3064\u3044\u306b\u30ab\u30b9\u30bf\u30e0\u30c9\u30e1\u30a4\u30f3\u3082 HTTPS \u304c\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u307e\u3057\u305f"),"\u3002"),Object(h.a)("p",null,Object(h.a)("a",Object(o.a)({parentName:"p"},{href:"https://www.netlify.com/"}),"Netlify")," \u306a\u3069\u9759\u7684\u306a\u30d5\u30a1\u30a4\u30eb\u3092\u30db\u30b9\u30c6\u30a3\u30f3\u30b0\u3059\u308b\u3060\u3051\u306a\u3089\u4ed6\u306b\u3082\u3044\u308d\u3044\u308d\u306a\u9078\u629e\u80a2\u304c\u3042\u308a\u307e\u3059\u304c\u3001 GitHub \u306e\u4ed6\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30da\u30fc\u30b8\u3082\u30d6\u30ed\u30b0\u3068\u540c\u3058\u30c9\u30e1\u30a4\u30f3\u3067\u30db\u30b9\u30c6\u30a3\u30f3\u30b0\u3057\u305f\u304b\u3063\u305f\u306e\u3068\u5358\u7d14\u306b\u4f7f\u3044\u6163\u308c\u3066\u3044\u308b\u306e\u3067 GitHub Pages \u3092\u4f7f\u3046\u3053\u3068\u306b\u3057\u307e\u3057\u305f\u3002"),Object(h.a)("h3",null,"\u30c7\u30d7\u30ed\u30a4\u81ea\u52d5\u5316"),Object(h.a)("p",null,"GitHub Pages \u3092\u4f7f\u3046\u306e\u3067\u30c7\u30d7\u30ed\u30a4\u306f GitHub \u3078\u306e git push \u3067\u884c\u308f\u308c\u307e\u3059\u3002\u3053\u306e\u4f5c\u696d\u3092\u81ea\u52d5\u5316\u3059\u308b\u305f\u3081\u306b CI \u30b5\u30fc\u30d3\u30b9\u3068\u3057\u3066 Travis CI \u3068 ",Object(h.a)("a",Object(o.a)({parentName:"p"},{href:"https://circleci.com/"}),"CircleCI")," \u3092\u691c\u8a0e\u3057\u307e\u3057\u305f\u3002\u3069\u3061\u3089\u304b\u3068\u3044\u3048\u3070\u4f7f\u3044\u6163\u308c\u3066\u3044\u308b\u306e\u306f CircleCI \u3067\u3057\u305f\u304c\u3001 GitHub Pages Deployment \u3068\u3044\u3046\u305d\u306e\u3082\u306e\u30ba\u30d0\u30ea\u306e\u6a5f\u80fd\u304c\u4f7f\u3048\u308b\u306e\u3067 Travis CI \u3092\u63a1\u7528\u3057\u307e\u3057\u305f\u3002"),Object(h.a)("p",null,"GitHub \u306e yuku/yuku.github.io \u30ea\u30dd\u30b8\u30c8\u30ea\u306e workspace \u30d6\u30e9\u30f3\u30c1\u306b push \u3059\u308b\u3068 Travis CI \u304b\u3089\u81ea\u52d5\u7684\u306b\u30c7\u30d7\u30ed\u30a4\u3055\u308c\u307e\u3059\u3002"),Object(h.a)("h3",null,"\u9759\u7684\u30b5\u30a4\u30c8\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf"),Object(h.a)("p",null,"\u624b\u5143\u306e\u77e5\u8b58\u3092\u6d3b\u304b\u3059\u305f\u3081\u306b\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30b5\u30a4\u30c9 JavaScript \u3067\u306f ",Object(h.a)("a",Object(o.a)({parentName:"p"},{href:"https://reactjs.org/"}),"React")," \u3092\u4f7f\u3046\u3053\u3068\u3092\u6c7a\u3081\u3066\u3044\u305f\u306e\u3067 ",Object(h.a)("a",Object(o.a)({parentName:"p"},{href:"https://nextjs.org/"}),"Next.js")," \u3068 ",Object(h.a)("a",Object(o.a)({parentName:"p"},{href:"https://www.gatsbyjs.org/"}),"Gatsby")," \u3092\u691c\u8a0e\u3057\u307e\u3057\u305f\u3002"),Object(h.a)("p",null,"Gatsby \u306f\u9759\u7684\u30b5\u30a4\u30c8\u306b\u3088\u308a\u7279\u5316\u3057\u3066\u3044\u308b\u96f0\u56f2\u6c17\u304c\u3042\u308b\u70b9\u304c\u9b45\u529b\u7684\u3067\u3057\u305f\u304c\u3001 Next.js \u3082 static export \u6a5f\u80fd\u3092\u4f7f\u3063\u3066 ",Object(h.a)("a",Object(o.a)({parentName:"p"},{href:"https://nextjs.org"}),"https://nextjs.org")," \u3092",Object(h.a)("a",Object(o.a)({parentName:"p"},{href:"https://www.reddit.com/r/reactjs/comments/992n2r/next_vs_gatsby/e4lrffl/"}),"\u4f5c\u3063\u3066\u3044\u308b"),"\u306e\u3067\u7a81\u7136\u30b5\u30dd\u30fc\u30c8\u3092\u7d42\u4e86\u3059\u308b\u3068\u306f\u8003\u3048\u306b\u304f\u304f\u3001\u7d50\u5c40"),Object(h.a)("ul",null,Object(h.a)("li",{parentName:"ul"},"\u904e\u53bb\u306b\u5c11\u3057\u89e6\u3063\u305f\u3053\u3068\u304c\u3042\u308b"),Object(h.a)("li",{parentName:"ul"},"\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u304c\u8aad\u307f\u3084\u3059\u304b\u3063\u305f")),Object(h.a)("p",null,"\u3068\u3044\u3046\u7406\u7531\u3067 Next.js \u306b\u3057\u307e\u3057\u305f\u3002"),Object(h.a)("p",null,Object(h.a)("a",Object(o.a)({parentName:"p"},{href:"https://www.npmtrends.com/gatsby-vs-next"}),Object(h.a)("img",Object(o.a)({parentName:"a"},{src:"/static/images/2019/01/next-vs-gatsby.png",alt:"Next.js vs Gatsby"})))),Object(h.a)("p",null,"npm \u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u6570\u3084\u958b\u767a\u306e\u6d3b\u767a\u3055\u306e\u6bd4\u8f03\u3067\u306f\u4e21\u8005\u306e\u9055\u3044\u306f\u3042\u307e\u308a\u306a\u3055\u305d\u3046\u3067\u3057\u305f\u3002"),Object(h.a)("h3",null,"MDX"),Object(h.a)("p",null,"\u30d6\u30ed\u30b0\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u4e2d\u3067 JavaScript \u3092\u4f7f\u304a\u3046\u3068\u3059\u308b\u3068\u3001\u672c\u6587\u306e\u30c6\u30ad\u30b9\u30c8\u30c7\u30fc\u30bf\u3068 JavaScript \u306e\u30b3\u30fc\u30c9\u3092\u3069\u306e\u3088\u3046\u306b\u9023\u643a\u3055\u308c\u308b\u306e\u304b\u304c\u554f\u984c\u306b\u306a\u308a\u307e\u3059\u3002\u8a18\u4e8b\u81ea\u4f53\u306f Markdown \u3067\u66f8\u304f\u3068\u3057\u3066\u3001 Markdown \u306e\u4e2d\u3067 ",Object(h.a)("inlineCode",{parentName:"p"},"<script>")," \u3092\u66f8\u304f\u306e\u907f\u3051\u305f\u3044\u3067\u3059\u3002"),Object(h.a)("p",null,Object(h.a)("a",Object(o.a)({parentName:"p"},{href:"https://mdxjs.com/"}),"MDX")," \u306f Markdown \u306e\u4e2d\u3067 JSX \u3092\u4f7f\u3048\u3046\u3088\u3046\u306b\u3057\u305f\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3067\u3059\u3002\u7c21\u5358\u306a\u8a71\u304c JSX \u8a18\u6cd5\u304c\u66f8\u304b\u308c\u305f\u5834\u6240\u306b\u5bfe\u5fdc\u3059\u308b React \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u81ea\u52d5\u7684\u306b\u30de\u30a6\u30f3\u30c8\u3055\u308c\u307e\u3059\u3002\u5e83\u304f\u666e\u53ca\u3057\u3066\u3044\u308b\u30c4\u30fc\u30eb\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u304c\u3001 Next.js \u3092\u958b\u767a\u3057\u3066\u3044\u308b ZEIT \u304c\u958b\u767a\u3057\u3066\u3044\u308b\u306e\u3067\u305d\u306e\u70b9\u306f\u5b89\u5fc3\u611f\u304c\u3042\u308a\u307e\u3059\u3002\u4eee\u306b MDX \u8a18\u6cd5\u304c\u4eee\u306b\u4f7f\u3048\u306a\u304f\u306a\u3063\u305f\u3068\u3057\u3066\u3082\u305d\u308c\u307e\u3067 JSX \u3092\u66f8\u3044\u3066\u3044\u305f\u5834\u6240\u306b DOM \u8981\u7d20\u3092\u4f5c\u308a\u3001\u305d\u308c\u306b\u5bfe\u3057\u3066 React \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u660e\u793a\u7684\u306b\u30de\u30a6\u30f3\u30c8\u3059\u308b\u3088\u3046\u306b\u3059\u308c\u3070\u3044\u3044\u3060\u3051\u306a\u306e\u3067\u79fb\u884c\u3059\u308b\u306e\u306f\u6bd4\u8f03\u7684\u7c21\u5358\u3060\u3068\u5224\u65ad\u3057\u307e\u3057\u305f\u3002"),Object(h.a)("h2",null,"\u304a\u308f\u308a\u306b"),Object(h.a)("p",null,"\u30d6\u30ed\u30b0\u3092\u81ea\u4f5c\u3059\u308b\u3053\u3068\u306b\u3057\u305f\u7406\u7531\u3068\u3001\u9078\u629e\u3057\u305f\u30c4\u30fc\u30eb\u306b\u3064\u3044\u3066\u7c21\u5358\u306b\u307e\u3068\u3081\u307e\u3057\u305f\u3002\u5192\u982d\u3067\u3082\u66f8\u3044\u305f\u3088\u3046\u306b\u3001\u3053\u308c\u304c\u4e07\u4eba\u306b\u5bfe\u3057\u3066\u304a\u3059\u3059\u3081\u3067\u304d\u308b\u69cb\u6210\u3068\u306f\u8003\u3048\u3066\u3044\u307e\u305b\u3093\u304c\u3001\u672a\u6765\u306e\u81ea\u5206\u3092\u542b\u3080\u3069\u3053\u304b\u306e\u8ab0\u304b\u306e\u53c2\u8003\u306b\u306a\u308c\u3070\u5e78\u3044\u3067\u3059\u3002"))}N.isMDXComponent=!0,a.d(e,"default",function(){return v});var w=i.a.createElement,v=function(t){function e(){return Object(p.a)(this,e),Object(b.a)(this,Object(j.a)(e).apply(this,arguments))}return Object(s.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return w(O.a,{meta:this.props.meta},w(N,null))}}],[{key:"getInitialProps",value:function(){var t=Object(r.a)(n.a.mark(function t(){var e,c;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=a("n1xW"),c=e.entries,t.abrupt("return",{meta:c["blog/2019/01/hello-new-blog"]});case 2:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}()}]),e}(i.a.Component)}},[["5mEE",1,0]]]);