import React, { useEffect, useState } from "react";
import "../css/ProjectCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAws,
  faCss3Alt,
  faHtml5,
  faNodeJs,
  faPhp,
  faReact,
  faSquareJs,
  faUnity,
} from "@fortawesome/free-brands-svg-icons";
import { faCode, faDatabase } from "@fortawesome/free-solid-svg-icons";
export function ProjectCard({ toolsUsed, title, mainImage, jobPosition }) {
  return (
    <div className="project-card">
      <img src={mainImage} alt="" className="project-card--main-image" />

      <div className="project-card--content">
        <div className="project-card--tools">
          {toolsUsed.map((tool) => (
            <ToolItem toolType={tool} />
          ))}
        </div>

        <h2 className="project-card--title">{title}</h2>
        <p className="project-card--job-position">{jobPosition}</p>
      </div>
    </div>
  );
}

function ToolItem({ toolType }) {
  const [icon, setIcon] = useState(faCode);

  const [backgroundColor, setBackgroundColor] = useState("orange");
  const [textColor, setTextColor] = useState("white");

  const [toolText, setToolText] = useState("tool");

  useEffect(() => {
    switch (toolType) {
      case "css":
        setIcon(faCss3Alt);
        setBackgroundColor("#33a9dc");
        setToolText("CSS");
        break;

      case "html":
        setIcon(faHtml5);
        setBackgroundColor("#f1662a");
        setToolText("HTML");
        break;

      case "react":
        setIcon(faReact);
        setBackgroundColor("#52c3e5");
        setToolText("React");
        break;

      case "js":
        setIcon(faSquareJs);
        setBackgroundColor("#f0db4f");
        setTextColor("#323330");
        setToolText("JavaScript");
        break;

      case "node":
        setIcon(faNodeJs);
        setBackgroundColor("#7fbd42");
        setToolText("NodeJs");
        break;

      case "php":
        setIcon(faPhp);
        setBackgroundColor("#777bb3");
        setToolText("PHP");
        break;

      case "mongodb":
        setIcon(faDatabase);
        setBackgroundColor("#57aa50");
        setToolText("MongoDB");
        break;

      case "unity":
        setIcon(faUnity);
        setBackgroundColor("white");
        setTextColor("black");
        setToolText("Unity");
        break;

      case "aws":
        setIcon(faAws);
        setBackgroundColor("#ff9a00");
        setToolText("AWS");
        break;

      default:
        setIcon(faCode);
        setToolText(toolType);
    }
  }, []);

  return (
    <div
      className="project-card--tool-item"
      style={{ backgroundColor: backgroundColor }}
    >
      <div className="project-card--icon" style={{ color: textColor }}>
        <FontAwesomeIcon icon={icon} />
      </div>

      <p style={{ color: textColor }}>{toolText}</p>
    </div>
  );
}
