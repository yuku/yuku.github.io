import Head from "next/head"

import { SITE_NAME } from "../src/constants"

export default () => (
  <div className="container">
    <Head>
      <title>About Me - {SITE_NAME}</title>
    </Head>
    <div className="row">
      <div className="col-12">
        <main>
          <h1 className="h5 mb-4 mb-lg-5 text-uppercase text-center font-weight-bold">About Me</h1>
          <img className="mb-4 img-fluid rounded" src="/static/images/about-me.jpg" />
          <p>
            大学入学後にプログラミングと出会い、在学中に 株式会社はてな や Google Japan でのインターンを経験。
            Increments 株式会社 へ最初の従業員として入社し、 CTO やテックリードとしてプログラマ向け情報共有サービス
            Qiita を開発してきましたが、 2019 年 1 月末をもって退職し 2 月から次の会社で働く予定です。
          </p>
          <p>
            社会人としては専ら Web
            アプリケーションエンジニアとしてキャリアを積んできましたが、情報検索やレコメンデーション、機械学習などに興味があり、大学院では図書館情報学の研究室でグラフ・ネットワークの分析などを行っていました。
          </p>
          <p>
            趣味はジョギング、クラシックギターとコーヒー豆を焙煎すること。一児の父として日々楽しく子育てしています。
          </p>
        </main>
      </div>
    </div>
  </div>
)
