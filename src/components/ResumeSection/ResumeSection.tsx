interface IProps {
  title: string
  children?: React.ReactNode
}

const ResumeSection = (props: IProps) => (
  <section className="mb-3">
    <h3 className="pt-3 pb-3">{props.title}</h3>
    {props.children}
  </section>
)

export default ResumeSection
