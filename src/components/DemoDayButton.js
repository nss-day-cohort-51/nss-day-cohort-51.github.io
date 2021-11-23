//Purpose: Creates and displays the Demo Day button component
//We will update link once we get the final URL

import React from "react";
import "../styles/_colors.scss";
import "../styles/custom.scss";

export const DemoDayButton = () => {
  return (
    <>
      {" "}
      <a href="https://www.eventbrite.com" target="_blank" rel="noreferrer">
        <div className="demo-day-btn">RSVP for Demo Day Feb 11, 2021</div>
      </a>
    </>
  );
};
