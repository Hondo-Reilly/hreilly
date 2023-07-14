import React, { useEffect, useRef, useState } from "react";
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

export function ProjectCard({
  toolsUsed,
  title,
  mainImage,
  jobPosition,
  imageLink,
}) {
  const [rotateValues, setRotateValues] = useState([0, 0]);

  const mobileTouch = useRef(false);

  const projectCardRef = useRef();

  const targetRotation = useRef([0, 0]);
  const rotateInterval = useRef(0);

  function handleMouseOver(event) {
    const width = projectCardRef.current.offsetWidth;
    const height = projectCardRef.current.offsetHeight;
    const bounds = projectCardRef.current.getBoundingClientRect();

    const relativeCenterX = event.clientX - bounds.left - width / 2;
    const relativeCenterY = event.clientY - bounds.top - height / 2;

    const offsetCenterXPercent = relativeCenterX / (width / 2);
    const offsetCenterYPercent = relativeCenterY / (height / 2);

    //setRotateValues([offsetCenterXPercent * 10, offsetCenterYPercent * -10]);
    if (!mobileTouch.current) {
      handleRotateLoop(rotateValues, [
        offsetCenterXPercent * 15,
        offsetCenterYPercent * -15,
      ]);
    }
  }

  function onMouseLeave(event) {
    handleRotateLoop(rotateValues, [0, 0]);
  }

  function handleRotateLoop(currentRotation = [0, 0], target = [0, 0]) {
    let [currentX, currentY] = currentRotation;
    targetRotation.current = target;

    function lerp(start, end, amt) {
      return (1 - amt) * start + amt * end;
    }

    function betweenVariance(val, comp, vari) {
      return val <= comp + vari && val >= comp - vari;
    }

    if (rotateInterval.current === undefined || rotateInterval.current === 0) {
      rotateInterval.current = setInterval(() => {
        let [targetX, targetY] = targetRotation.current;

        currentX = lerp(currentX, targetX, 0.1);
        currentY = lerp(currentY, targetY, 0.1);

        setRotateValues([currentX, currentY]);

        if (
          betweenVariance(currentX, targetX, 0.1) &&
          betweenVariance(currentY, targetY, 0.1)
        ) {
          setRotateValues(targetRotation.current);
          clearInterval(rotateInterval.current);
          rotateInterval.current = undefined;
        }
        /*
        let deltaX = targetX - currentX;
        let deltaY = targetY - currentY;
        let magnitude = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));

        let changeX =
          (deltaX / magnitude) * Math.min(rotationSpeed.current, magnitude) ||
          0;
        let changeY =
          (deltaY / magnitude) * Math.min(rotationSpeed.current, magnitude) ||
          0;

        currentX += changeX;
        currentY += changeY;

        setRotateValues([currentX, currentY]);


        if (changeX === 0 && changeY === 0) {
          clearInterval(rotateInterval.current);
          rotateInterval.current = undefined;
        }
        */
      }, 10);
    }
  }

  return (
    <div
      className="project-card"
      ref={projectCardRef}
      onMouseMove={handleMouseOver}
      onMouseLeave={onMouseLeave}
      onTouchStart={() => {
        mobileTouch.current = true;
        setRotateValues([0, 0]);
      }}
    >
      <div
        className="project-card--rotation-wrapper"
        style={{
          transform: `perspective(800px) rotateX(${rotateValues[1]}deg) rotateY(${rotateValues[0]}deg)`,
        }}
      >
        <a href={imageLink} target="_blank">
          <img src={mainImage} alt="" className="project-card--main-image" />
        </a>

        <div className="project-card--content">
          <div className="project-card--text-content">
            <h2 className="project-card--title">{title}</h2>
            <p className="project-card--job-position">{jobPosition}</p>
          </div>

          <div className="project-card--tools">
            {toolsUsed.map((tool) => (
              <ToolItem toolType={tool} />
            ))}
          </div>
        </div>
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
