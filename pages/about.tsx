import Header from "../src/components/Header/Header"
import Navigation from "../src/components/Navigation/Navigation"

export default () => (
  <div>
    <Navigation />
    <Header heading="About Me" subheading="This is what I do." backgroundImage="/static/about-bg.jpg"/>
  </div>
)
