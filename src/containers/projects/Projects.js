import React, {useContext} from "react";
import {Fade} from "react-reveal";
import "./Project.scss";

import {bigProjects} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Projects() {
  const {isDark} = useContext(StyleContext);

  if (!bigProjects.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="40px">
      <div
        className={
          isDark
            ? "main projects-container dark-mode"
            : "main projects-container"
        }
        id="projects"
      >
        <h1 className="project-title">
          {bigProjects.title}
        </h1>

        <p
          className={
            isDark
              ? "project-subtitle dark-mode-text"
              : "project-subtitle"
          }
        >
          {bigProjects.subtitle}
        </p>

        <div className="featured-projects-grid">
          {bigProjects.projects.map((project, i) => (
            <div
              className={
                isDark
                  ? "featured-project-card dark-mode-card"
                  : "featured-project-card"
              }
              key={i}
            >
              <div className="featured-project-image">
                <img
                  src={project.image}
                  alt={project.projectName}
                />
              </div>

              <div className="featured-project-content">
                <h2>{project.projectName}</h2>

                <p>{project.projectDesc}</p>

                {project.footerLink &&
                  project.footerLink.length > 0 && (
                    <div className="featured-project-links">
                      {project.footerLink.map((link, index) => (
                        <a
                          key={index}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.name}
                        </a>
                      ))}
                    </div>
                  )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fade>
  );
}