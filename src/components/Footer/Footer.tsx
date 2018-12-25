import { Container, Col, Row } from "reactstrap"

import "./footer.scss"

const Footer = () => (
  <footer className="mainfooter">
    <Container>
      <Row>
        <Col lg="8" md="10" className="mx-auto">
          <ul className="list-inline text-center mb-3">
            <li className="list-inline-item">
              <a href="https://twitter.com/yuku_t">
                <span className="fa-stack fa-lg">
                  <i className="fas fa-circle fa-stack-2x" />
                  <i className="fab fa-twitter fa-stack-1x fa-inverse" />
                </span>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.facebook.com/yuku.takahashi">
                <span className="fa-stack fa-lg">
                  <i className="fas fa-circle fa-stack-2x" />
                  <i className="fab fa-facebook-f fa-stack-1x fa-inverse" />
                </span>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://github.com/yuku">
                <span className="fa-stack fa-lg">
                  <i className="fas fa-circle fa-stack-2x" />
                  <i className="fab fa-github fa-stack-1x fa-inverse" />
                </span>
              </a>
            </li>
          </ul>
          <p className="copyright text-muted">Copyright &copy; Yuku Takahashi 2018</p>
        </Col>
      </Row>
    </Container>
  </footer>
)

export default Footer
