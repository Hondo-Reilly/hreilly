import React from "react";
import "../css/ProjectList.css";
import BlackHole from "./BlackHole";
import { ProjectCard } from "./ProjectCard";

import NameDibsImage from "../assets/NameDibs.png";
import SnapOrderImage from "../assets/SnapOrder.png";
import ModTechLabsImage from "../assets/ModTechLabs.png";

function ProjectList() {
  return (
    <>
      <div id="project-list-scroll-snap"></div>
      <div id="project-list">
        <div className="project-list--content-wrapper">
          <h1 className="white" id="project-list-title">
            Projects and Experience
          </h1>

          <div className="project-list--list">
            <ProjectCard
              toolsUsed={["react", "html", "css", "js", "mongodb", "aws"]}
              title="SnapOrder"
              mainImage={SnapOrderImage}
              jobPosition="Full-Stack Developer"
              imageLink="https://snaporder.com"
              jobDuration="January 2022 - August 2023"
            />

            <ProjectCard
              toolsUsed={["html", "css", "js", "php"]}
              title="NameDibs"
              mainImage={NameDibsImage}
              jobPosition="Front-End Developer"
              imageLink="https://namedibs.com/"
              jobDuration="June 2022 - December 2023"
            />

            <ProjectCard
              toolsUsed={["html", "css", "js", "unity"]}
              title="Mod Tech Labs"
              mainImage={ModTechLabsImage}
              jobPosition="QA & UI Design Intern"
              imageLink="https://modtechlabs.com/"
              jobDuration="June 2022 - August 2023"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectList;
