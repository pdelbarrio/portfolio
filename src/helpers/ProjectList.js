import Proj1 from "../assets/proj12.jpg";
import Proj2 from "../assets/proj2.jpg";
import Proj3 from "../assets/proj3.gif";
import Proj4 from "../assets/proj4.jpg";
import Proj5 from "../assets/proj4.gif";

export const ProjectList = [
  {
    name: "Get Out BCN",
    image: Proj1,
    info:
      "GET OUT BCN is a collaborative database of cool spots in Barcelona. It is divided into different categories. The user has to register to browse or to add spots to the database. The spots are moderated and will not appear until validated by the administrator.  \n" +
      "Regarding the more technical part one of my purposes with this project was to get into the TypeScript world with React. And although at the beginning it was complicated, as the project progressed I got used to it and it even made some tasks easier if the types were well defined, thus adding an extra layer of security to the application.Another of my purposes was to do testing, and I did TDD with Jest on the backend routes, and I discovered how rewarding the feeling you get when you see all the tests go green 😏 👌🏻",
    skills:
      "JavaScript, React with TypeScript, TDD with JEST for the backend, Express, Node, MongoDB ,HTML, StyledComponents, FIGMA",
    linkrepo: "https://github.com/pdelbarrio/getout-front",
    linkdeploy: "https://www.getoutbcn.com/",
    linkdemo: "https://vimeo.com/720203535",
    status: " Active, but you can see a demo below.",
  },
  {
    name: "intrathecapp web app (PRIALT)",
    info:
      "Frontend of a web application that calculates drug doses for pharmaceutical use. Intrathecapp is an application intended to calculate the doses of a medication to be administered to patients. The client gave us a complex excel file with a multitude of formulas that related different excel fields according to some inputs. The logic part of the calculator was made using Javascript OOP.  \n" +
      "The backend was done with django and the frontend (my part) with React, using Hooks and Context to manage the state. The application and the repository are private but below I show a small demo.",
    image: Proj2,
    skills: "React, JavaScript, HTML",
    linkdemo: "https://vimeo.com/720597336",
    status:
      "After developing the project the company decided to leave its release on standby, but you can see a demo below.",
  },
  {
    name: "Frequencies Game",
    image: Proj3,
    info: "Play catch game done in Vanilla JavaScript",
    skills: "Vanilla JavaScript",
    linkrepo: "https://github.com/pdelbarrio/frequencies-game",
    linkdeploy: "https://pdelbarrio.github.io/frequencies-game/",
    status: "Active",
  },
  {
    name: "Videolol",
    image: Proj4,
    info: "Mobile frienldy e-commerce site for sale of vhs with shopping cart, social login, possibility to pay by credit card with Stripe integration",
    skills: " React, Styled Components, Firebase, Redux, Stripe",
    linkrepo: "https://github.com/pdelbarrio/videolol",
    linkdeploy: "https://videolol.netlify.app/",
    linkdemo: "",
    status: "Active",
  },
  {
    name: "BookMeApp",
    image: Proj5,
    info: "B2B application booking tool. Venues and promoters are able to create a user. The venue will have a calendar in which the promoter can choose a day and book gigs. The promoter will be able to check venue's details, book the venue, cancel reservation.",
    skills: "React, Node.js, MongoDB",
    linkrepo: "https://github.com/Susana-Prado/BookMeApp-front",
    linkdeploy: "",
    linkdemo: "",
    status: "Inactive, website recently expired due Heroku upgrade",
  },
];
