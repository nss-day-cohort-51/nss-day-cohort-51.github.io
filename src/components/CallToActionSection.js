//Purpose: Creates and displays the CTA component
import React from "react";
import aliensThreeFaces from "../images/aliensThreeFaces.png";

export const CallToActionSection = () => {
  return (
    <div className="cta-section__block">
      <section className="cta-section__alien-faces__block">
        <img
          className="alien-faces__image"
          src={aliensThreeFaces}
          alt="three alien heads"
        />
      </section>
      <section className="cta-section__text-container">
        <div className="cta-text__block">
          {" "}
          <div className="cta-text">
            JOIN US FOR DEMO DAY ON FEBRUARY 11, 2022
          </div>
        </div>
      </section>
      <section className="cta-section__demo-day-btn">
        <a
          href="https://www.nashss.com/demoday/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="demo-day-btn">
            <div className="btn-item">SIGN-UP NOW!</div>
          </div>
        </a>
      </section>
    </div>
  );
};
