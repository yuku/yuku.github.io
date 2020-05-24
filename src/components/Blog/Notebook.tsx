import { INotebook } from "../../../entries"
import Layout from "./Layout"

interface IProps {
  meta: INotebook
  children: React.ReactNode
}

export default (props: IProps) => (
  <Layout className="notebook" meta={props.meta}>
    {props.children}
  </Layout>
)
