import Item from "../Timeline/Item"

interface IProps {
  workPlace: {
    name: string
    location: string
  }
  meta: {
    time: string
    title: string
  }
  children?: React.ReactNode
}

const WorkExperience = (props: IProps) => (
  <Item
    head={
      <div>
        <div className="d-flex justify-content-between">
          <h3 className="">{props.workPlace.name}</h3>
          <div className="align-self-center text-muted small">
            <i className="fas fa-map-marker-alt mr-1" />
            {props.workPlace.location}
          </div>
        </div>
        <span className="d-block text-primary h5">{props.meta.title}</span>
      </div>
    }
    left={<div className="text-muted">{props.meta.time}</div>}
    description={props.children}
  />
)

export default WorkExperience
