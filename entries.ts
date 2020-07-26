export type Entry = Mdx | Notebook

export type ITag = "Blog dev" | "essay" | "pyspark" | "GCP" | "gRPC" | "julia" | "k8s"

export interface Base {
  description: string
  modifiedAt?: string
  publishedAt: string
  tags: ITag[]
  title: string
  ogImage?: string
}

export interface Mdx extends Base {
  format: "mdx"
  /**
   * Insert <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
   * to document body in componentDidMount().
   */
  loadTwitterWidget?: boolean
}

export interface Notebook extends Base {
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
export const entries: Record<string, Entry> = {
  "blog/2020/07/connect-to-a-resource-behind-a-k9s-cluster-from-local-machine": {
    title: "Connect to a Resource Behind a k8s Cluster From Local Machine",
    description:
      "Sometimes, especially in production environment, resources such as databases are only accessable from a k8s cluster for security purposes and cannot be accessed directly from your local machine. In this case, if you want to access the resource from your local machine, you need to create a tunnel service in the cluster. This blog post explains how to create a such service.",
    format: "mdx",
    publishedAt: "2020-07-25T22:42:00+09:00",
    modifiedAt: "2020-07-25T22:49:00+09:00",
    tags: ["k8s"],
  },
  "blog/2020/01/poisson-generalized-linear-model": {
    description: "架空植物のデータを一般化線形モデルであるポアソン回帰を用いてモデリングする。",
    format: "ipynb",
    publishedAt: "2020-01-18T10:54:00+09:00",
    modifiedAt: "2020-01-18T11:25:00+09:00",
    tags: ["julia"],
    title: "一般化線形モデル - ポアソン回帰",
  },
  "blog/2020/01/maximum-likelihood-estimation-of-probability-distribution-and-statistical-model": {
    description:
      "架空の植物の集団を調査して得られたデータを説明するためにポアソン分布をあてはめ、最尤推定を用いてパラメータの推定を行う。",
    format: "ipynb",
    publishedAt: "2020-01-13T00:52:00+09:00",
    tags: ["julia"],
    title: "確率分布と統計モデルの最尤推定",
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
  "blog/2019/10/github-actions": {
    description: "ブログの CI/CD を CircleCI から GitHub Actions に移行してみての所感など。",
    format: "mdx",
    publishedAt: "2019-10-13T23:57:00+09:00",
    tags: ["Blog dev"],
    title: "GitHub Actions に移行した",
  },
  "blog/2019/08/rss-feed": {
    description: "ブログに RSS フィードを実装しました。",
    format: "mdx",
    publishedAt: "2019-08-30T19:10:00+09:00",
    tags: ["Blog dev"],
    title: "RSS フィードを実装した",
  },
  "blog/2019/08/ipynb-without-python": {
    description: "Python を使わずに Jupyter Notebook 形式をサポートしました。",
    format: "mdx",
    publishedAt: "2019-08-18T19:10:00+09:00",
    tags: ["Blog dev"],
    title: "ブログのビルド環境から Python を排除した",
  },
  "blog/2019/06/why-i-joined-flywheel": {
    description: "何を魅力に感じて FLYWHEEL に入社しようと決めたのかの記録です。",
    format: "mdx",
    modifiedAt: "2019-06-18T09:52:00+09:00",
    publishedAt: "2019-06-17T22:28:00+09:00",
    tags: ["essay"],
    title: "なぜ FLYWHEEL に入社したのか",
  },
  "blog/2019/04/pyspark-ml-vs-mllib": {
    description: "",
    format: "mdx",
    publishedAt: "2019-04-22T00:04:00+09:00",
    tags: ["pyspark"],
    title: "pyspark.ml と pyspark.mllib のどちらを使うべきか",
  },
  "blog/2019/01/authorize-iap-by-nodejs": {
    description:
      "This post explains how to use google-auth-library to authenticate and access resources protected by Cloud IAP with Node.js.",
    format: "mdx",
    publishedAt: "2019-01-28T14:54:00+09:00",
    modifiedAt: "2020-07-26T17:17:00+09:00",
    tags: ["GCP"],
    title: "Access a Cloud IAP-Protected Resource With Node.js",
  },
  "blog/2019/01/grpc-proxy-for-grpc-web": {
    description:
      "In order for gRPC to communicate with gRPC-Web, you need to set up a proxy, such as Envoy. This article describes why gRPC-Web needs a proxy.",
    format: "mdx",
    loadTwitterWidget: true,
    modifiedAt: "2019-01-25T23:26:00+09:00",
    publishedAt: "2019-01-25T22:30:00+09:00",
    tags: ["gRPC"],
    title: "Why gRPC-Web Needs Proxy",
  },
  "blog/2019/01/deploy-app-engine-from-circleci": {
    description: "How to deploy ann app running on AppEngine Node.js standard environment using CircleCI",
    format: "mdx",
    modifiedAt: "2019-01-20T09:33:00+09:00",
    publishedAt: "2019-01-18T14:00:00+09:00",
    tags: ["GCP"],
    title: "Deploy AppEngine Apps Using CircleCI",
  },
  "blog/2019/01/google-cloud-sdk-in-docker": {
    description:
      "This article explains how to install and use the Google Cloud SDK in Docker rather than on the local machine.",
    format: "mdx",
    modifiedAt: "2020-05-30T09:21:13+09:00",
    publishedAt: "2019-01-17T14:43:00+09:00",
    tags: ["GCP"],
    title: "How to Use Google Cloud SDK Using Docker",
  },
  "blog/2019/01/hello-pyspark": {
    description: "An introduction to pyspark using the Docker image environment provided by Jupyter Lab.",
    format: "ipynb",
    modifiedAt: "2020-05-30T08:34:49+09:00",
    publishedAt: "2019-01-16T20:50:00+09:00",
    tags: ["pyspark"],
    title: "Getting Started With Pyspark Using Docker",
  },
  "blog/2019/01/hello-ipynb": {
    description:
      "Jupyter Notebook can now be displayed on this blog. I'm going to use it to publish my study records of machine learning and data analysis. This article describes the details of the implementation.",
    format: "ipynb",
    modifiedAt: "2020-05-30T00:43:29+09:00",
    publishedAt: "2019-01-15T20:17:00+09:00",
    tags: ["Blog dev"],
    title: "Display Jupyter Notebook on Next.js",
  },
  "blog/2019/01/twitter-card-and-ogp": {
    description: "Twitter Card and Open Graph Protocol are now supported on the blog.",
    format: "mdx",
    loadTwitterWidget: true,
    modifiedAt: "2020-05-29T23:41:46+09:00",
    publishedAt: "2019-01-07T22:40:00+09:00",
    tags: ["Blog dev"],
    title: "Twitter Card and OGP Support",
  },
  "blog/2019/01/hello-new-blog": {
    description:
      "It's 2019 and I've created a new blog of my own. I will explain the motivation and the background of the selection of the tools I used.",
    format: "mdx",
    modifiedAt: "2020-05-24T16:15:21+09:00",
    ogImage: "https://yuku.takahashi.coffee/static/images/2019/01/next-vs-gatsby.png",
    publishedAt: "2019-01-05T13:52:00+09:00",
    tags: ["Blog dev"],
    title: "Background on Blog Homebrewing and Tool Selection in 2019",
  },
}
