import Proj1 from "../assets/proj1.jpg";
import Proj2 from "../assets/proj2.jpg";
import Proj3 from "../assets/proj3.gif";
import Proj4 from "../assets/proj4.gif";

export const ProjectList = [
  {
    name: "Get Out BCN",
    image: Proj1,
    info: "GetOut is a collaborative database bla",
    skills:
      "JavaScript, React with TypeScript, TDD with JEST for the backend, HTML, StyledComponents, FIGMA",
    linkrepo: "https://github.com/pdelbarrio/getout-front",
    linkdeploy: "https://www.getoutbcn.com/",
  },
  {
    name: "PRIALT web app",
    info: "Frontend of a web application that calculates drug doses for pharmaceutical use.",
    image: Proj2,
    skills: "React, JavaScript, HTML",
    linkdemo: "Demo soon",
  },
  {
    name: "Frequencies Game",
    image: Proj3,
    info: "Play catch game done in Vanilla JavaScript",
    skills: "Vanilla JavaScript",
    linkrepo: "https://github.com/pdelbarrio/frequencies-game",
    linkdeploy: "https://pdelbarrio.github.io/frequencies-game/",
  },
  {
    name: "BookMeApp",
    image: Proj4,
    info: "B2B application booking tool. Venues and promoters are able to create a user. The venue will have a calendar in which the promoter can choose a day and book gigs. The promoter will be able to check venue's details, book the venue, cancel reservation.",
    skills: "React, Node.js, MongoDB",
    linkrepo: "https://github.com/Susana-Prado/BookMeApp-front",
    linkdeploy: "http://bookmeapp-bma.herokuapp.com/",
  },
];
