import { useState } from "react";
import "./css/Home.css";
import HSButton from "./components/HSButton.jsx";
import Ocean from "./components/Ocean.jsx";
import ProjectList from "./components/ProjectList.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import wave from "./assets/RedWave-01.png";
import StaticEffectButton from "./components/StaticEffectButton.jsx";
import { About } from "./components/About.jsx";
function Home() {
  function handleOnProjectsClick() {
    const element = document.getElementById("project-list-scroll-snap");
    element.scrollIntoView({ behavior: "smooth" });
  }

  function handleOnAboutClick(){
    const element = document.getElementById("about-me");
    element.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <>
      <div id="hero">
        <div id="intro-nav">
          <h1>Hondo Reilly</h1>
          <h2>Designer and Developer</h2>

          <HSButton size="large" onClick={handleOnAboutClick}>About</HSButton>
          <HSButton size="large" onClick={handleOnProjectsClick}>
            Projects
          </HSButton>
          <HSButton size="large">Contact</HSButton>
        </div>

        <Ocean />

        <button id="down-arrow">
          <FontAwesomeIcon icon={faArrowDown} id="svg-arrow" />
        </button>
      </div>

      <About />

      <ProjectList />
    </>
  );
}

export default Home;
