import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import ParticlesComponent from "../components/Particles";
import fototrans from "../assets/transbg.png";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Pablo</h2>
        <div className="prompt">
          <ParticlesComponent />

          <p>A Frontend developer with a passion for learning and creating.</p>
          <a href="mailto:pablodbb@gmail.com" target="_blank">
            <EmailIcon />
          </a>
          <a href="https://github.com/pdelbarrio" target="_blank">
            <GithubIcon />
          </a>
          <div className="personalcard">
            <img className="fotopablo" src={fototrans} alt="Pablo" />
            <div>
              <p>bla bla</p>
            </div>
          </div>
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
