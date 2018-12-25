import Header from "../src/components/Header/Header"

export default () => (
  <div>
    <Header className="mb-5" backgroundImage="/static/home-bg.jpg" overlay>
      <div className="text-center text-white">
        <h1 className="display-4 font-weight-bold">SELECT * FROM life;</h1>
        <p className="lead font-weight-light mt-1 mb-0">Study Hard, Play Harder</p>
      </div>
    </Header>
  </div>
)
