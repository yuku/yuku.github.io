import React, { FC } from "react"
import Head from "next/head"

import { Education, PublicationEntry, Section, Timeline, WorkExperience } from "src/components/Resume"
import Title from "src/components/Title"

const SummarySection = () => (
  <Section title="Summary">
    <p>
      Energetic software engineer with 7+ years experiences developing Web applications and with 2+ years experiences
      developing recommender system.
    </p>
  </Section>
)

const WorkExperiencesSection = () => (
  <Section title="Work Experiences">
    <Timeline>
      <WorkExperience
        workPlace={{
          location: "Tokyo, Japan",
          name: "FLYWHEEL",
        }}
        meta={{
          time: "2019/02 - Current",
          title: "Software Engineer",
        }}
      >
        <ul>
          <li>Designed and maintained data pipeline for a recommender system that handles 1M+ products.</li>
          <li>Improved the performance of the recommender system by data driven analyzation.</li>
          <li>Implemented a chatbot for internal use and drive chatops culture in the company.</li>
          <li>Automated complex deployment workflow that can be triggered by chat.</li>
        </ul>
        <p>
          Tools:
          <span className="badge bg-secondary ms-1">Python</span>
          <span className="badge bg-secondary ms-1">TypeScript</span>
          <span className="badge bg-secondary ms-1">Apache Spark</span>
          <span className="badge bg-secondary ms-1">Apache Pulsar</span>
          <span className="badge bg-secondary ms-1">gRPC</span>
          <span className="badge bg-secondary ms-1">Kubernetes</span>
          <span className="badge bg-secondary ms-1">Bazel</span>
          <span className="badge bg-secondary ms-1">Slack Bolt</span>
          <span className="badge bg-secondary ms-1">AWS</span>
          <span className="badge bg-secondary ms-1">GCP</span>
        </p>
      </WorkExperience>
      <WorkExperience
        workPlace={{
          location: "Tokyo, Japan",
          name: "Increments",
        }}
        meta={{
          time: "2013/04 - 2019/01",
          title: "CTO, Senior Software Engineer",
        }}
      >
        <p>The first employee of the company. As a CTO (2014/01 - 2017/05):</p>
        <ul>
          <li>Formulated software engineer job ladder.</li>
          <li>Performed internal audits and documented results.</li>
          <li>Managed and addressed engineer hiring issues.</li>
          <li>Successfully mentored 10+ engineers.</li>
          <li>Wrote tech specs and identified risks before starting major projects.</li>
        </ul>
        <p>As a Software Engineer:</p>
        <ul>
          <li>
            Developed <a href="https://qiita.com">qiita.com</a> and grown the site scale 100+ times.
          </li>
          <li>Designed scalable system on AWS.</li>
          <li>Designed an architecture of systems based on DDD and Clean Architecture.</li>
          <li>Released 10+ OSS projects to GitHub and continuously maintained them.</li>
          <li>Documented in-house technology and worked on reducing implicit knowledge.</li>
          <li>Wrote tests for sustainable development.</li>
          <li>Diagnose and resolve technical issues.</li>
          <li>Work well within a team environment, showing solid relationship-building skills.</li>
        </ul>
        <p>
          Tools:
          <span className="badge bg-secondary ms-1">Ruby</span>
          <span className="badge bg-secondary ms-1">TypeScript</span>
          <span className="badge bg-secondary ms-1">Ruby on Rails</span>
          <span className="badge bg-secondary ms-1">AWS</span>
        </p>
      </WorkExperience>
      <WorkExperience
        workPlace={{
          location: "Tokyo, Japan",
          name: "Google Japan",
        }}
        meta={{
          time: "2012/08 - 2012/09",
          title: "Summer Internship",
        }}
      >
        <p>
          As a member of the Chrome team, worked on a project to investigate how web browsers are utilized in real
          world.
        </p>
      </WorkExperience>
      <WorkExperience
        workPlace={{
          location: "Kyoto, Japan",
          name: "Hatena",
        }}
        meta={{
          time: "2010/08 - 2013/03",
          title: "Part-time Job",
        }}
      >
        <p>Designed and implemented a system that manages 5,000+ servers.</p>
      </WorkExperience>
    </Timeline>
  </Section>
)

const EducationSection = () => (
  <Section title="Education">
    <Timeline>
      <Education name="Kyoto University, Japan" degree="M.S. in Social Informatics" time="2010/04 - 2011/09" />
      <Education name="Kyoto University, Japan" degree="B.S. in Information Science" time="2006/04 - 2010/03" />
    </Timeline>
  </Section>
)

const PublicationSection = () => (
  <Section title="Publication">
    <h4>Journal Papers</h4>
    <ul>
      <li className="mb-2">
        <PublicationEntry
          title="Evaluating Significance of Historical Entity using Wikipedia Link Structure"
          author={
            <span>
              <strong>Yuku Takahashi</strong>, Hiroaki Ohshima, Mitsuo Yamamoto, Hirotoshi Iwasaki, Satoshi Oyama,
              Katsumi Tanaka
            </span>
          }
          name="Journal of the DBSJ, Vol. 10, No. 1, pp. 25 -- 30, June 2011"
        />
      </li>
      <li className="mb-2">
        <PublicationEntry
          title="Evaluating Significance of Historical Entities Based on Impacts Calculation"
          author={
            <span>
              <strong>Yuku Takahashi</strong>, Hiroaki Ohshima, Mitsuo Yamamoto, Hirotoshi Iwasaki, Satoshi Oyama,
              Katsumi Tanaka
            </span>
          }
          name="Journal of the IPSC, Vol. 52, No. 12, pp. 3542 -- 3557, December 2011"
        />
      </li>
      <li className="mb-2">
        <PublicationEntry
          title="Extraction and Geographical Navigation of Important Historical Events in the Web"
          author={
            <span>
              Mitsuo Yamamoto, <strong>Yuku Takahashi</strong>, Hirotoshi Iwasaki, Satoshi Oyama, Hiroaki Ohshima,
              Katsumi Tanaka Katsumi Tanaka
            </span>
          }
          name="Transactions in GIS, Blackwell Publishing Ltd, 2011"
        />
      </li>
    </ul>
    <h4>Conference Papers</h4>
    <ul>
      <li className="mb-2">
        <PublicationEntry
          title="Evaluating Significance of Historical Entities Based on Tempo-Spatial Impacts Using Wikipedia Link
            Structure"
          author={
            <span>
              <strong>Yuku Takahashi</strong>, Hiroaki Ohshima, Mitsuo Yamamoto, Hirotoshi Iwasaki, Satoshi Oyama,
              Katsumi Tanaka
            </span>
          }
          name={
            <span>
              The 22nd ACM Conference on Hypertext and Hypermedia (<abbr className="initialism">HT2011</abbr>), June,
              2011
            </span>
          }
        />
      </li>
      <li className="mb-2">
        <PublicationEntry
          title="Extraction and Geographical Navigation of Important Historical Events in the Web"
          author={
            <span>
              Mitsuo Yamamoto, <strong>Yuku Takahashi</strong>, Hirotoshi Iwasaki, Satoshi Oyama, Hiroaki Ohshima,
              Katsumi Tanaka
            </span>
          }
          name={
            <span>
              The 10th International Symposium on Web &amp; Wireless Geographical Information Systems (
              <abbr className="initialism">W2GIS2011</abbr>), LNCS 6574, pp.21-35, March, 2011
            </span>
          }
        />
      </li>
    </ul>
    <h4>Magazine</h4>
    <ul>
      <li className="mb-2">
        <PublicationEntry
          title="切りひらくRuby 第7回 ElasticsearchをRubyから使おう"
          author={<strong>髙橋侑久</strong>}
          name="WEB+DB PRESS Vol. 87"
        />
      </li>
      <li className="mb-2">
        <PublicationEntry
          title="切りひらくRuby 第10回 RailsでReactを使う"
          author={<strong>髙橋侑久</strong>}
          name="WEB+DB PRESS Vol. 90"
        />
      </li>
    </ul>
  </Section>
)

const Resume: FC = () => (
  <div className="container">
    <Head>
      <Title>Resume</Title>
    </Head>
    <div className="row">
      <div className="col-12">
        <main>
          <h1 className="font-weight-bold">
            Yuku Takahashi
            <p className="text-muted h4">Software Engineer</p>
          </h1>
          <SummarySection />
          <WorkExperiencesSection />
          <EducationSection />
          <PublicationSection />
        </main>
      </div>
    </div>
  </div>
)

export default Resume
