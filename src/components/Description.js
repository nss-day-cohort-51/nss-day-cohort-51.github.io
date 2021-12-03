//Purpose: Creates and displays the Description component
import React from "react";
import logo2 from "../images/logo2.svg";
import backgroundImage from "../images/description.svg";
import { DemoDayButton } from "../components/DemoDayButton";

export const Description = () => {
  return (
    <>

      <div id="description" className="description">
        <div className="logo"><img className="logo-img" src={logo2} alt="C51" /></div>
        <div className="description-section__about"
          style={{ backgroundImage: `url(${backgroundImage})`, backgroundRepeat: `no-repeat`, backgroundSize: `auto 100%`, backgroundPosition: `right bottom` }} >
          <div className="about-wrapper">
            <h1>Nashville Software School Presents Cohort 51!</h1>
            <h2>THE DEVELOPERS ARE OUT THERE!</h2>
            <p>We are <strong>Nashville Software School's</strong> Cohort 51! Our Cohort is a little different. We learned front end foundations together, and then split into two paths: UI/UX Design and Full Stack. See our <a href="http://localhost:3000/#techStack" rel="techstack">
              Tech Stack </a></p>
            <p>Abduct a developer at our virtual demo day on <strong>February 11, 2022</strong></p>
            <DemoDayButton />
          </div>
        </div>
      </div>
    </>
  );
};
