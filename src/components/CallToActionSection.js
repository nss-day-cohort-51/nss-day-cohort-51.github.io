import React from "react";

export const CallToActionSection = () => {
  return (
    <div className="cta-section__block">
      <section className="cta-section__text-container">
        <span className="cta__text"></span>
      </section>
      <section className="cta-section__">
        <a
          href="https://www.nashss.com/demoday"
          target="_blank"
          rel="noreferrer"
        >
          <div className="demo-day-btn">
            <div className="btn-item">RSVP</div>
          </div>
        </a>
      </section>
    </div>
  );
};
