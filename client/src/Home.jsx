import { useState } from "react";
import "./css/Home.css";
import HSButton from "./components/HSButton.jsx";
import Ocean from "./components/Ocean.jsx";
import ProjectList from "./components/ProjectList.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import wave from "./assets/RedWave-01.png";
import StaticEffectButton from "./components/StaticEffectButton.jsx";
function Home() {
  return (
    <>
      <div id="hero">
        <HSButton size="large">About</HSButton>
        <HSButton size="large">Projects</HSButton>
        <HSButton size="large">Contact</HSButton>

        <Ocean />

        <button id="down-arrow">
          <FontAwesomeIcon icon={faArrowDown} id="svg-arrow" />
        </button>
      </div>

      <ProjectList />

      <StaticEffectButton></StaticEffectButton>
    </>
  );
}

export default Home;
