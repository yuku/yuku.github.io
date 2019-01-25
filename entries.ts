export type IEntry = IMdx | INotebook

export interface IBase {
  description: string
  modifiedAt?: string
  publishedAt: string
  tags: string[]
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
  modifiedAt: "2019-01-20T09:33:00+09:00",
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
      "gRPC と gRPC-Web が通信するにはブラウザの制約から間にプロキシを立てる必要があります。 Envoy 以外に使えるプロキシについて調べました。",
    format: "mdx",
    publishedAt: "2019-01-25T22:30:00+09:00",
    tags: ["gRPC"],
    title: "gRPC-Web がプロキシを必要とする理由と Envoy 以外の選択肢について",
  },
}
