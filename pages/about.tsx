import { Container, Col, Row } from "reactstrap"

import Education from "../src/components/Education/Education"
import Header from "../src/components/Header/Header"
import ResumeSection from "../src/components/ResumeSection/ResumeSection"
import Timeline from "../src/components/Timeline/Timeline"
import WorkExperience from "../src/components/WorkExperience/WorkExperience"
import PublicationEntry from "../src/components/PublicationEntry/PublicationEntry"

const WorkExperiencesSection = () => (
  <ResumeSection title="Work Experiences">
    <Timeline>
      <WorkExperience
        workPlace={{
          location: "Tokyo, Japan",
          name: "Increments",
        }}
        meta={{
          time: "2013/04 - Current",
          title: "Senior Software Engineer",
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
  </ResumeSection>
)

const EducationSection = () => (
  <ResumeSection title="Education">
    <Timeline>
      <Education name="Kyoto University, Japan" degree="M.S. in Social Informatics" time="2010/04 - 2011/09" />
      <Education name="Kyoto University, Japan" degree="B.S. in Information Science" time="2006/04 - 2010/03" />
    </Timeline>
  </ResumeSection>
)

const PublicationSection = () => (
  <ResumeSection title="Publication">
    <Row>
      <Col md="10" lg="8" className="mx-auto">
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
                  The 22nd ACM Conference on Hypertext and Hypermedia (<abbr className="initialism">HT2011</abbr>),
                  June, 2011
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
      </Col>
    </Row>
  </ResumeSection>
)

export default () => (
  <div>
    <Header className="bg-primary">
      <div className="site-heading text-white">
        <Row>
          <Col sm="4" className="d-none d-sm-block">
            <img src="/static/haniwa.png" alt="avatar" className="img-thumbnail rounded-circle" />
          </Col>
          <Col sm="8" className="d-flex flex-column justify-content-center text-center text-sm-left">
            <h1 className="display-4 font-weight-bold">Yuku Takahashi</h1>
            <p className="lead font-weight-light mt-1 mb-0">Software Engineer</p>
          </Col>
        </Row>
      </div>
    </Header>

    <Container>
      <WorkExperiencesSection />
      <EducationSection />
      <PublicationSection />
    </Container>
  </div>
)
