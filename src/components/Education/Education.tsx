import Item from "../Timeline/Item"

interface IProps {
  degree: string
  time: string
  name: string
  children?: React.ReactNode
}

const Education = (props: IProps) => (
  <Item
    className="education"
    head={
      <div>
        <h3>{props.name}</h3>
        <span className="d-block h5 text-primary">{props.degree}</span>
      </div>
    }
    left={<div className="text-muted">{props.time}</div>}
    description={props.children}
  />
)

export default Education
