import React from "react";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";
import ParticlesComponent from "../components/Particles";
import fototrans from "../assets/transbg.png";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <div>
          <h2> Hi, My Name is Pablo</h2>
          <br />
          <h3>Frontend developer</h3>
          <a href="mailto:pablodbb@gmail.com" target="_blank" rel="noreferrer">
            <EmailIcon />
          </a>
          <a
            href="https://github.com/pdelbarrio"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
          </a>
        </div>
        <div className="prompt">
          <ParticlesComponent />

          {/* <div className="personalcard">
            <img className="fotopablo" src={fototrans} alt="Pablo" />
            <div className="text">
              <p>digital enthusiast</p>
              <p>culture devourer</p>
            </div>
          </div> */}
        </div>
      </div>

      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li key="1" className="item">
            <h2> Front-End</h2>
            <span>
              JavaScript, TypeScript, ReactJS, Redux, HTML, CSS, NPM, Ionic,
              BootStrap, MaterialUI, StyledComponents, FIGMA
            </span>
          </li>
          <li key="2" className="item">
            <h2>Back-End</h2>
            <span>NodeJS, ExpressJS, MongoDB, MySQL</span>
          </li>
          <li key="3" className="item">
            <h2>Testing</h2>
            <span>Jest, Mocha, Jasmine</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
