import { Container, Col, Row } from "reactstrap"

import Education from "../src/components/Education/Education"
import Header from "../src/components/Header/Header"
import ResumeSection from "../src/components/ResumeSection/ResumeSection"
import Timeline from "../src/components/Timeline/Timeline"
import WorkExperience from "../src/components/WorkExperience/WorkExperience"

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
    </Container>
  </div>
)
