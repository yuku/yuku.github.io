import { Row, Col } from "reactstrap"

interface IProps {
  className?: string
  children?: React.ReactNode
}

const SingleCol = (props: IProps) => (
  <Row className={props.className}>
    <Col md="10" lg="8" className="mx-auto">
      {props.children}
    </Col>
  </Row>
)

export default SingleCol
