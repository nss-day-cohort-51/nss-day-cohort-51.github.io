//Purpose: Creates and displays the Demo Day button component
//nashss.com/demoday - will not redirect to your eventbrite page until January 12th. We’ll start promoting it to employers the week of January 17th.

import React from "react";
import "../styles/_colors.scss";
import "../styles/custom.scss";

export const DemoDayButton = () => {
  return (
    <>
      {" "}
      <a href="https://www.eventbrite.com" target="_blank" rel="noreferrer">
        <div className="demo-day-btn">RSVP for Demo Day Feb 11, 2022</div>
      </a>
    </>
  );
};
