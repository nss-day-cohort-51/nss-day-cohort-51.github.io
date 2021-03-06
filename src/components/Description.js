//Purpose: Creates and displays the Description component
import React from "react";
import logo from "../images/logo.svg";
import { DemoDayButton } from "../components/DemoDayButton";

export const Description = () => {
  return (
    <>
      <div id="description" className="description">
        <div className="logo-wrapper">
          <div className="logo">
            <img className="logo-img" src={logo} alt="C51" />
          </div>
        </div>
        <div className="description-section__about">
          <h1>
            Nashville Software School Presents <span>Cohort 51!</span>
          </h1>
          <h2>THE DEVELOPERS ARE OUT THERE!</h2>
          <p>We are <strong>Nashville Software School's</strong> Cohort 51! Our
            Cohort is a little different. We learned front end foundations
            together, and then split into two paths:{" "}
            <span className="fullstack">Full Stack</span> and{" "}
            <span className="uiux">UI/UX</span> Developers. See our{" "}
            <a href="#techStack">
              <span>Tech Stack</span>
            </a>
          </p>
          <p>
            Abduct a developer at our virtual demo day on{" "}
            <span>
              <strong>February 11, 2022</strong>
            </span>
          </p>

          <div className="description-section__demoday">
            <a
              href="https://www.nashss.com/demoday"
              target="_blank"
              rel="noreferrer"
            >
              <DemoDayButton />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
