(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{387:function(e,n,a){__NEXT_REGISTER_PAGE("/blog/2019/01/deploy-app-engine-from-circleci",function(){return e.exports=a(409),{page:e.exports.default}})},409:function(e,n,a){"use strict";a.r(n);var t=a(3),o=a.n(t),r=a(0),m=a.n(r),c=a(6),l=a(1);a(15);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}function s(e,n){for(var a=0;a<n.length;a++){var t=n[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function u(e,n){return!n||"object"!==p(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,n){return(f=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var d=function(e){function n(e){var a;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(a=u(this,g(n).call(this,e))).layout=null,a}var a,t,o;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&f(e,n)}(n,m.a.Component),a=n,(t=[{key:"render",value:function(){var e=this.props,n=e.components;i(e,["components"]);return m.a.createElement(l.MDXTag,{name:"wrapper",components:n},m.a.createElement(l.MDXTag,{name:"p",components:n},"所用で Google App Engine を使うことになり"),m.a.createElement(l.MDXTag,{name:"ul",components:n},m.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"master")," ブランチへ push したら staging にリリースする"),m.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"/^vd+.d+.d+$/")," にマッチするタグを push のとき production にリリースする")),m.a.createElement(l.MDXTag,{name:"p",components:n},"という仕様で CircleCI を使って自動デプロイを実装しました。この構成はなかなか便利で再利用する機会がありそうなので、やったことを備忘録としてまとめます。"),m.a.createElement(l.MDXTag,{name:"h2",components:n},"サービスアカウントを作る"),m.a.createElement(l.MDXTag,{name:"p",components:n},"CircleCI 上で Cloud SDK を認証するためのサービスアカウントを作ります:"),m.a.createElement(l.MDXTag,{name:"ol",components:n},m.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ol"},"Google Cloud Platform Console の ",m.a.createElement(l.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://console.cloud.google.com/iam-admin/serviceaccounts"}},"サービスアカウント")," から新しいアカウントを作成",m.a.createElement(l.MDXTag,{name:"ul",components:n,parentName:"li"},m.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},'名前はわかりやすく "circleci" とかにする'),m.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},"最後にキーを作って忘れずに JSON をダウンロードしておく（あとで使う）"))),m.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ol"},m.a.createElement(l.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://console.cloud.google.com/iam-admin/iam"}},"IAM")," で先程作ったサービスアカウントに役割を付与する",m.a.createElement(l.MDXTag,{name:"ul",components:n,parentName:"li"},m.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},"App Engine デプロイ担当者（",m.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"appengine.deployer"),"）"),m.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},"App Engine サービス管理者（",m.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"appengine.serviceAdmin"),"）"),m.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},"Cloud Build 編集者（",m.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"cloudbuild.builds.editor"),"）"),m.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},"ストレージのオブジェクト作成者（",m.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"storage.objectCreator"),"）"),m.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},"ステージオブジェクト閲覧者（",m.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"storage.objectViewer"),"）")))),m.a.createElement(l.MDXTag,{name:"p",components:n},"役割を付与しても実際に SDK から操作したときにその結果が反映されるまで数分単位でラグがあるので注意が必要です。"),m.a.createElement(l.MDXTag,{name:"p",components:n},"また新しい GCP プロジェクトを作ると（もしかしたら App Engine を有効にしたときかも知れない） Cloud Build サービスアカウント（",m.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"cloudbuild.builds.builder"),"）という役割を持った ",m.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"xxx@cloudbuild.gserviceaccount.com")," というサービスアカウントが作られますが、このアカウントにも追加で"),m.a.createElement(l.MDXTag,{name:"ul",components:n},m.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},"ステージオブジェクト閲覧者（",m.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"storage.objectViewer"),"）")),m.a.createElement(l.MDXTag,{name:"p",components:n},"を付与する必要がありました。"),m.a.createElement(l.MDXTag,{name:"h2",components:n},"CircleCI を設定する"),m.a.createElement(l.MDXTag,{name:"p",components:n},"今回の Google App Engine は nodejs10 で実装されていて、いくつかの npm scripts が定義されています:"),m.a.createElement(l.MDXTag,{name:"ul",components:n},m.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"npm run test"),m.a.createElement(l.MDXTag,{name:"ul",components:n,parentName:"li"},m.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},"テストを実行する。"))),m.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"npm run build"),m.a.createElement(l.MDXTag,{name:"ul",components:n,parentName:"li"},m.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},"プロジェクトをビルドして build ディレクトリに成果物を生成する。"),m.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"gcloug app deploy")," でアップロードしなければならないので、デプロイ時に成果物が存在する必要がある。")))),m.a.createElement(l.MDXTag,{name:"p",components:n},"こういう仕様のもと以下のように実装しました。"),m.a.createElement(l.MDXTag,{name:"h3",components:n},"Cloud SDK"),m.a.createElement(l.MDXTag,{name:"p",components:n},m.a.createElement(l.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/blog/2019/01/google-cloud-sdk-in-docker"}},"Docker で Google Cloud SDK を使う")," で使った ",m.a.createElement(l.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://hub.docker.com/r/google/cloud-sdk/"}},"google/cloud-sdk")," をここでも使います。"),m.a.createElement(l.MDXTag,{name:"p",components:n},"先程作ったサービスアカウントで Cloud SDK を認証します。ダウンロードした JSON を CircleCI の環境変数に設定します。今回は ",m.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"GCLOUD_SERVICE_KEY")," という名前にしました。すると、以下のコマンドで Cloud SDK を認証することができます:"),m.a.createElement(l.MDXTag,{name:"pre",components:n,props:{className:"language-bash"}},m.a.createElement(l.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-bash"}},m.a.createElement(l.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token keyword"}},"echo")," ",m.a.createElement(l.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token variable"}},"$GCLOUD_SERVICE_KEY")," ",m.a.createElement(l.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token operator"}},"|")," gcloud auth activate-service-account --key-file",m.a.createElement(l.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token operator"}},"="),"-\n")),m.a.createElement(l.MDXTag,{name:"h3",components:n},"workspace"),m.a.createElement(l.MDXTag,{name:"p",components:n},"とくに問題になったのがデプロイ時にビルドした成果物が必要だったことです。ビルドするには Node.js が必要ですが、 Google が提供している google/cloud-sdk という Docker イメージには当然 Node.js はインストールされていないので:"),m.a.createElement(l.MDXTag,{name:"ol",components:n},m.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ol"},"Node.js と Cloud SDK が両方使える Docker イメージを作ってそれを使う"),m.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ol"},"何かしらの方法で Node.js のコンテナでビルドした成果物を Cloud SDK のコンテナに持っていく")),m.a.createElement(l.MDXTag,{name:"p",components:n},"など方法で対処する必要があります。最初は 1. でやっていたのですが改めて CircleCI のドキュメントを読み返したところ ",m.a.createElement(l.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://circleci.com/docs/2.0/workflows/#using-workspaces-to-share-data-among-jobs"}},"workspace を使えば job をまたいでファイルを受け渡すことができる"),"ことが分かったのでそれを使うことにしました。"),m.a.createElement(l.MDXTag,{name:"h3",components:n},"デプロイ"),m.a.createElement(l.MDXTag,{name:"p",components:n},"App Engine へのデプロイには ",m.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"gcloud app deploy")," コマンドを使います。今回は目的に応じて以下のオプションを使いました:"),m.a.createElement(l.MDXTag,{name:"ul",components:n},m.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"--version")," - バージョンに名前をつける。同じ名前を使うと仮に既存のバージョンが存在している場合それを置き換えることができる。"),m.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"--no-promote")," - デプロイ後に新しく作ったバージョンにトラフィックを回さない。 staging をデプロイしても production を変更しないためにこのオプションを使う。")),m.a.createElement(l.MDXTag,{name:"p",components:n},"オプションに ",m.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"--stop-previous-version")," というオプションがヘルプにあって当初は各リリースで別のバージョンを作ろうと思ったのですが、ドキュメントを読んでも実際に使ってみても挙動がよく分からなかったので ",m.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"--version")," で置き換える方式にしています。"),m.a.createElement(l.MDXTag,{name:"h2",components:n},"おわりに"),m.a.createElement(l.MDXTag,{name:"p",components:n},"毎日触るならまだしも、たまにしか触らないプロジェクトはデプロイ作業はさらに頻度が下がるので、久しぶりにデプロイしようと思うたびに正しいやり方を思い出すことから始めなければならなくなったりします。"),m.a.createElement(l.MDXTag,{name:"p",components:n},"こうした自動化は初期投資は少し大きくなりますがやっておいて損はないと感じます。ドキュメントとしてやり方を残しておけば、次回以降の初期投資自体が小さくなっていきますしね。"),m.a.createElement(l.MDXTag,{name:"h2",components:n},"参考"),m.a.createElement(l.MDXTag,{name:"ul",components:n},m.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(l.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://circleci.com/docs/2.0/google-auth/"}},"Authorizing the Google Cloud SDK - CircleCI")),m.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(l.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://cloud.google.com/sdk/docs/authorizing#authorizing_with_a_service_account"}},"Cloud SDK ツールの承認  |  Cloud SDK のドキュメント  |  Google Cloud")),m.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(l.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://circleci.com/docs/2.0/workflows/#using-workspaces-to-share-data-among-jobs"}},"Using Workflows to Schedule Jobs - CircleCI")),m.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(l.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://cloud.google.com/sdk/gcloud/reference/app/deploy"}},"gcloud app deploy  |  Cloud SDK  |  Google Cloud"))))}}])&&s(a.prototype,t),o&&s(a,o),n}();function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function D(e,n,a,t,o,r,m){try{var c=e[r](m),l=c.value}catch(e){return void a(e)}c.done?n(l):Promise.resolve(l).then(t,o)}function T(e,n){for(var a=0;a<n.length;a++){var t=n[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function M(e,n){return!n||"object"!==E(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function X(e){return(X=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,n){return(b=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}a.d(n,"default",function(){return y});var y=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),M(this,X(n).apply(this,arguments))}var t,r,l;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&b(e,n)}(n,m.a.Component),t=n,r=[{key:"render",value:function(){return m.a.createElement(c.a,{meta:this.props.meta},m.a.createElement(d,null))}}],l=[{key:"getInitialProps",value:function(){var e,n=(e=o.a.mark(function e(){var n,t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a(19),t=n.entries,e.abrupt("return",{meta:t["blog/2019/01/deploy-app-engine-from-circleci"]});case 2:case"end":return e.stop()}},e)}),function(){var n=this,a=arguments;return new Promise(function(t,o){var r=e.apply(n,a);function m(e){D(r,t,o,m,c,"next",e)}function c(e){D(r,t,o,m,c,"throw",e)}m(void 0)})});return function(){return n.apply(this,arguments)}}()}],r&&T(t.prototype,r),l&&T(t,l),n}()}},[[387,1,0,2]]]);