import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import "../styles/ProjectDisplay.css";
import ReactPlayer from "react-player";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img className="image" src={project.image} alt={project.name} />
      <div className="projectinfo">
        <p>
          <b className="texttitle">Info:</b>
          <span className="text">{project.info}</span>
        </p>
        <p>
          <b className="texttitle">Tech:</b>
          <span className="text">{project.skills}</span>
        </p>
        <div className="icons">
          {project.linkrepo && (
            <a href={project.linkrepo} target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
          )}
          {project.linkdeploy && (
            <a href={project.linkdeploy} target="_blank" rel="noreferrer">
              <LinkIcon />
            </a>
          )}
        </div>
      </div>
      <div className="demo">
        {project.linkdemo && <ReactPlayer url={project.linkdemo} />}
      </div>
    </div>
  );
}

export default ProjectDisplay;
