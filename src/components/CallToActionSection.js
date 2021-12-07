import React from "react";
// import ScrollableAnchor from "react-scrollable-anchor";

export const CallToActionSection = () => {
  return (
    <>
      <div id="callToAction"></div>
      {/* <ScrollableAnchor id={"techStack"}></ScrollableAnchor> */}
      <div className="cta-section__block">
        <section className="cta-section__text-container">
          <div className="cta-text__block">
            {" "}
            <div className="cta-text">
              JOIN US FOR DEMO DAY ON FEBRUARY 11, 2022
            </div>
          </div>
        </section>
        <section className="cta-section">
          <a
            href="https://www.nashss.com/demoday/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="demo-day-btn">
              <div className="btn-item">RSVP</div>
            </div>
          </a>
        </section>
      </div>
    </>
  );
};
