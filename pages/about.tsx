import { Col, Row } from "reactstrap"

import Header from "../src/components/Header/Header"

export default () => (
  <div>
    <Header className="bg-primary" fullScreen>
      <div className="text-white">
        <Row>
          <Col sm="4" className="d-none d-sm-block">
            <img src="/static/haniwa.png" alt="avatar" className="img-thumbnail rounded-circle" />
          </Col>
          <Col sm="8" className="d-flex flex-column justify-content-center text-center text-sm-left">
            <h1 className="display-4 font-weight-bold">髙橋 侑久</h1>
            <p className="lead font-weight-light mt-1 mb-0">
              Increments社最初の従業員としてQiitaを開発したりCTOやったりしていました。現在有給消化中
            </p>
          </Col>
        </Row>
      </div>
    </Header>
  </div>
)
