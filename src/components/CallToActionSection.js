import React from "react";

export const CallToActionSection = () => {
  return (
    <div className="cta-section__block">
      <section className="cta-section__text-container">
        <div className="cta-text__block">
          {" "}
          <span className="cta__text">
            JOIN US FOR DEMO DAY ON FEBRUARY 11, 2022
          </span>
        </div>
      </section>
      <section className="cta-section__">
        <a
          href="https://www.nashss.com/demoday/"
          target="_blank"
          rel="noreferrer" 
          className="link__no-underline"
        >
          <div className="demo-day-btn">
            <div className="btn-item">RSVP</div>
          </div>
        </a>
      </section>
    </div>
  );
};
