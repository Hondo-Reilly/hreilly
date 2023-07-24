import React from "react";
import "../css/AboutMe.css";
import HondoPhoto from "../assets/HondoPhoto.jpg";
export function About() {
  return (
    <div id="about-me">
      <div className="about-me--content-wrapper content-wrapper">
        <h1 className="about-me--header">About me</h1>

        <div className="about-me--content-card">
          <div className="about-me--content-card-content-wrapper">
            <h3>
              Howdy, <br className="about-me--name-break" /> Im Hondo Reilly
            </h3>
            <p>
              I'm a design and developer from Austin, TX. Currently I'm studying
              Engineering at Texas A&M.
            </p>
          </div>

          <div className="about-me--head-shot-photo-wrapper">
            <img
              src={HondoPhoto}
              alt=""
              className="about-me--head-shot-photo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
