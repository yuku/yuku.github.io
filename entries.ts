export type IEntry = IMdx | INotebook

export type ITag = "ブログ開発記" | "essay" | "pyspark" | "GCP" | "gRPC" | "julia"

export interface IBase {
  description: string
  modifiedAt?: string
  publishedAt: string
  tags: ITag[]
  title: string
  ogImage?: string
}

export interface IMdx extends IBase {
  format: "mdx"
  /**
   * Insert <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
   * to document body in componentDidMount().
   */
  loadTwitterWidget?: boolean
}

export interface INotebook extends IBase {
  format: "ipynb"
}

/*
templates

"blog/2019/01/path": {
  description: "",
  format: "mdx",
  publishedAt: "2019-01-18T14:00:00+09:00",
  tags: [""],
  title: "",
},
*/

// tslint:disable:object-literal-sort-keys
export const entries: Record<string, IEntry> = {
  "blog/2019/01/hello-new-blog": {
    description:
      "2019 年になってブログを新しく自作しました。そのモチベーションと利用したツールの選別背景を解説します。",
    format: "mdx",
    modifiedAt: "2019-01-07T21:49:00+09:00",
    ogImage: "https://yuku.takahashi.coffee/static/images/2019/01/next-vs-gatsby.png",
    publishedAt: "2019-01-05T13:52:00+09:00",
    tags: ["ブログ開発記"],
    title: "ブログの自作とツール選別の背景",
  },
  "blog/2019/01/twitter-card-and-ogp": {
    description: "ブログで Twitter Card と Open Graph Protocol に対応しました。",
    format: "mdx",
    loadTwitterWidget: true,
    modifiedAt: "2019-01-07T22:47:00+09:00",
    publishedAt: "2019-01-07T22:40:00+09:00",
    tags: ["ブログ開発記"],
    title: "Twitter Card と OGP に対応した",
  },
  "blog/2019/01/hello-ipynb": {
    description: "ブログ記事を Jupyter Notebook の ipynb 形式で書けるようにしました。",
    format: "ipynb",
    modifiedAt: "2019-01-16T13:51:00+09:00",
    publishedAt: "2019-01-15T20:17:00+09:00",
    tags: ["ブログ開発記"],
    title: "Jupyter Notebook でブログを書けるようにした",
  },
  "blog/2019/01/hello-pyspark": {
    description: "Jupyter Lab が提供している Docker イメージで作った動作環境を使って pyspark に入門します。",
    format: "ipynb",
    modifiedAt: "2019-01-17T17:54:00+09:00",
    publishedAt: "2019-01-16T20:50:00+09:00",
    tags: ["pyspark"],
    title: "Docker を使って pyspark に入門する",
  },
  "blog/2019/01/google-cloud-sdk-in-docker": {
    description: "Google Cloud SDK をローカルマシンではなく Docker 内にインストールして使う手順を説明します。",
    format: "mdx",
    modifiedAt: "2019-01-20T09:23:00+09:00",
    publishedAt: "2019-01-17T14:43:00+09:00",
    tags: ["GCP"],
    title: "Docker で Google Cloud SDK を使う",
  },
  "blog/2019/01/deploy-app-engine-from-circleci": {
    description: "CircleCI を使って App Engine Node.js スタンダード環境をデプロイする方法。",
    format: "mdx",
    modifiedAt: "2019-01-20T09:33:00+09:00",
    publishedAt: "2019-01-18T14:00:00+09:00",
    tags: ["GCP"],
    title: "CircleCI から App Engine をデプロイする",
  },
  "blog/2019/01/grpc-proxy-for-grpc-web": {
    description:
      "gRPC と gRPC-Web が通信するには Envoy のようなプロキシを立てる必要があります。プロキシが必要になる背景について調べた結果をまとめます。",
    format: "mdx",
    loadTwitterWidget: true,
    modifiedAt: "2019-01-25T23:26:00+09:00",
    publishedAt: "2019-01-25T22:30:00+09:00",
    tags: ["gRPC"],
    title: "gRPC-Web がプロキシを必要とする理由",
  },
  "blog/2019/01/authorize-iap-by-nodejs": {
    description:
      "Cloud IAP で保護されたリソースに対し google-auth-library を使って Node.js で認証しアクセスする方法を解説します。",
    format: "mdx",
    publishedAt: "2019-01-28T14:54:00+09:00",
    tags: ["GCP"],
    title: "Node.js から Cloud IAP で保護されたリソースを認証する",
  },
  "blog/2019/04/pyspark-ml-vs-mllib": {
    description: "",
    format: "mdx",
    publishedAt: "2019-04-22T00:04:00+09:00",
    tags: ["pyspark"],
    title: "pyspark.ml と pyspark.mllib のどちらを使うべきか",
  },
  "blog/2019/06/why-i-joined-flywheel": {
    description: "何を魅力に感じて FLYWHEEL に入社しようと決めたのかの記録です。",
    format: "mdx",
    modifiedAt: "2019-06-18T09:52:00+09:00",
    publishedAt: "2019-06-17T22:28:00+09:00",
    tags: ["essay"],
    title: "なぜ FLYWHEEL に入社したのか",
  },
  "blog/2019/08/ipynb-without-python": {
    description: "Python を使わずに Jupyter Notebook 形式をサポートしました。",
    format: "mdx",
    publishedAt: "2019-08-18T19:10:00+09:00",
    tags: ["ブログ開発記"],
    title: "ブログのビルド環境から Python を排除した",
  },
  "blog/2019/08/rss-feed": {
    description: "ブログに RSS フィードを実装しました。",
    format: "mdx",
    publishedAt: "2019-08-30T19:10:00+09:00",
    tags: ["ブログ開発記"],
    title: "RSS フィードを実装した",
  },
  "blog/2019/10/github-actions": {
    description: "ブログの CI/CD を CircleCI から GitHub Actions に移行してみての所感など。",
    format: "mdx",
    publishedAt: "2019-10-13T23:57:00+09:00",
    tags: ["ブログ開発記"],
    title: "GitHub Actions に移行した",
  },
  "blog/2020/01/als-for-matrix-factorization": {
    description:
      "協調フィルタリングで広く使われる MF の実装の一つである ALS アルゴリズムの数学的な背景を確認し、 Julia を使って実装する。",
    format: "ipynb",
    publishedAt: "2020-01-06T10:09:00+09:00",
    modifiedAt: "2020-01-06T10:33:00+09:00",
    tags: ["julia"],
    title: "Matrix Factorization のための ALS アルゴリズムの数理と実装",
  },
  "blog/2020/01/maximum-likelihood-estimation-of-probability-distribution-and-statistical-model": {
    description:
      "架空の植物の集団を調査して得られたデータを説明するためにポアソン分布をあてはめ、最尤推定を用いてパラメータの推定を行う。",
    format: "ipynb",
    publishedAt: "2020-01-13T00:52:00+09:00",
    tags: ["julia"],
    title: "確率分布と統計モデルの最尤推定",
  },
}
