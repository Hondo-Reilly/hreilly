import React from "react";
import "../css/ProjectList.css";
import BlackHole from "./BlackHole";
import { ProjectCard } from "./ProjectCard";

import NameDibsImage from "../assets/NameDibs.png";
import SnapOrderImage from "../assets/SnapOrder.png";
import ModTechLabsImage from "../assets/ModTechLabs.png";

function ProjectList() {
  return (
    <div id="project-list">
      <h1 className="white">Projects and Experience</h1>

      <div className="project-list--list">
        <ProjectCard
          toolsUsed={["react", "html", "css", "js", "mongodb", "aws"]}
          title="SnapOrder"
          mainImage={SnapOrderImage}
          jobPosition="Main Developer"
        />

        <ProjectCard
          toolsUsed={["html", "css", "js", "php"]}
          title="NameDibs"
          mainImage={NameDibsImage}
          jobPosition="Developer and Designer"
        />

        <ProjectCard
          toolsUsed={["html", "css", "js", "unity"]}
          title="Mod Tech Labs"
          mainImage={ModTechLabsImage}
          jobPosition="Internship"
        />
      </div>
    </div>
  );
}

export default ProjectList;
