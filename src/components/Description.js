//Purpose: Creates and displays the Description component
import React from "react";
import logo from "../images/logo.png";
import backgroundImage from "../images/description.svg";
import { DemoDayButton } from "../components/DemoDayButton";

export const Description = () => {
  return (
    <>

      <div id="description" className="description">
        <div className="logo"><img className="logo-img" src={logo} alt="C51" /></div>
        <div className="description-section__about"
        style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: `cover`, backgroundRepeat: `no-repeat`, backgroundSize: `auto 100%`, backgroundPosition: `right bottom` }} >
          <h1>THE DEVELOPERS ARE OUT THERE!</h1>
          <p>We are <strong>Nashville Software School's</strong> Cohort 51! Our Cohort is a little different. We learned front end foundations together, and then split into two paths: UI/UX Design, and Full Stack. See our <a href="http://localhost:3000/#techStack" rel="techstack">
            Tech Stack </a></p>
          <div className="rsvp">
            <DemoDayButton />
          </div>
        </div>
      </div>
    </>
  );
};
