import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import "../styles/ProjectDisplay.css";

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
          <p className="text">{project.info}</p>
        </p>
        <p>
          <b className="texttitle">Tech:</b>
          <p className="text">{project.skills}</p>
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
          {project.linkdemo && <h2>{project.linkdemo}</h2>}
        </div>
      </div>
    </div>
  );
}

export default ProjectDisplay;
