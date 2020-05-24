interface IProps {
  children?: React.ReactNode
}

const Timeline = (props: IProps) => <div className="timeline">{props.children}</div>

export default Timeline
