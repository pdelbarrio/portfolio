import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import ParticlesComponent from "../components/Particles";
import "../styles/Experience.css";

function Experience() {
  return (
    <div className="experience">
      <ParticlesComponent />
      <VerticalTimeline lineColor="#000000">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2000 - 2002"
          iconStyle={{ background: "#000000", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            IES Castellarnau, Sabadell
          </h3>
          <p>
            Certificate of Higher Education in Telecommunications and Computer
            Systems
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2002 - 2020"
          iconStyle={{ background: "#ea0d0d", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Non-programming related jobs
          </h3>
          {/* <h4 className="vertical-timeline-element-subtitle"></h4> */}
          <p></p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Oct 2020 – Dec 2020"
          iconStyle={{ background: "#000000", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Web Server environment programming course
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Professional course
          </h4>

          <p> PHP, MySql, API Rest</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="March 2021 - May 2021"
          iconStyle={{ background: "#000000", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Full Time Web Development Bootcamp
          </h3>

          <h4 className="vertical-timeline-element-subtitle">Bootcamp</h4>

          <p> JavaScript, MERN Stack</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="November 2021 – February 2022"
          iconStyle={{ background: "#39c40e", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            React Frontend Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Freelance</h4>
          <p>
            Frontend of a web application that calculates drug doses for
            pharmaceutical use.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="July 2022 – November 2022"
          iconStyle={{ background: "#092c74", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            2i Informática Industrial
          </h4>
          <p>
            Programming and maintenance of applications for mobile phones and
            the company's own hardware interfaces related to unattended service
            stations.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>

      <div className="buttons">
        <a
          className="button"
          target="_blank"
          href="https://res.cloudinary.com/getoutbcn/image/upload/v1675634098/portfolio/PablodelBarrio_english2023_csrtzw.pdf"
          rel="noreferrer"
        >
          English CV
        </a>
        <a
          className="button"
          target="_blank"
          href="https://res.cloudinary.com/getoutbcn/image/upload/v1675634098/portfolio/PablodelBarrio_spanish2023_swzzrb.pdf"
          rel="noreferrer"
        >
          Spanish CV
        </a>
      </div>
    </div>
  );
}

export default Experience;
