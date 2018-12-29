import { Container, Row, Col } from "reactstrap"

interface IProps {
  children?: React.ReactNode
}

const SingleCol = (props: IProps) => (
  <Container>
    <Row>
      <Col md="10" lg="8" className="mx-auto">
        {props.children}
      </Col>
    </Row>
  </Container>
)

export default SingleCol
