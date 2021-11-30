import React from "react";
import { DemoDayButton } from "./DemoDayButton";

export const CallToActionSection = () => {
  return (
    <div id="callToActionSection__container">
      <section className="callToActionSection text__block">
        <span>JOIN US FOR DEMO DAY ON FEBRUARY 11, 2022 </span>
      </section>
      <section className="callToActionSection demo-day__block">
        <a
          href="https://www.nashss.com/demoday"
          target="_blank"
          rel="noreferrer"
        >
          <div className="demo-day-btn">
            <div className="btn-item">&nbsp;RSVP&nbsp;</div>
          </div>
        </a>
      </section>
    </div>
  );
};
