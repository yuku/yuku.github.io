import "./resumesection.scss"

interface IProps {
  title: string
  children?: React.ReactNode
}

const ResumeSection = (props: IProps) => (
  <section className="resume-section">
    <h2 className="text-center pt-3 pb-3">{props.title}</h2>
    {props.children}
  </section>
)

export default ResumeSection
