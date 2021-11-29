//Purpose: Creates and displays the Description component
import React from "react";

import logo from "../images/logo.png";
import { DemoDayButton } from "../components/DemoDayButton";

export const Description = () => {
  return (
    <>

    <div className="logo"><img className="logo__img" src={logo} alt="C51" /></div>
      <div id="description" className="description-section__about">
        <h1>THE DEVELOPERS ARE OUT THERE!</h1>
        <p>Our Cohort 51 was completely remote. We are a mix of both Full-Stack and UI/UX Front-End Developers. See our <a href="http://localhost:3000/#techStack" rel="techstack">
        Tech Stack </a></p>
        <div className="rsvp">
            <DemoDayButton />
          </div>
</div>
    </>
  );
};
