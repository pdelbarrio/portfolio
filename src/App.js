import logo from "./logoanimation.gif";
import linkedin from "./linkedin.png";
import github from "./github.png";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span>coming soon</span>
        <div className="main">
          <div className="main-sub">
            <img className="logo" src={github} alt="github logo" />
            <a
              className="links"
              href="https://github.com/pdelbarrio"
              target="_blank"
            >
              <p>github.com/pdelbarrio</p>
            </a>
          </div>
          <div className="main-sub">
            <img className="logo" src={linkedin} alt="linkedin logo" />
            <a
              className="links"
              href="https://www.linkedin.com/in/pablo-del-barrio/"
              target="_blank"
            >
              <p>linkedin.com/in/pablo-del-barrio</p>
            </a>
          </div>
          <div className="buttons">
            <a
              className="button"
              target="_blank"
              href="https://res.cloudinary.com/parkfinder/image/upload/v1646241398/portfolio/pablodelbarrio2022english_lizdgo.pdf"
            >
              English CV
            </a>
            <a
              className="button"
              target="_blank"
              href="https://res.cloudinary.com/parkfinder/image/upload/v1646241399/portfolio/pablodelbarrio2022cast_joodca.pdf"
            >
              Spanish CV
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
