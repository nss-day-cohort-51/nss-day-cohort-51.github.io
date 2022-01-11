//Purpose: Creates and displays the Demo Day button component
//https://www.nashss.com/demoday - will not redirect to our eventbrite page until January 12th. We’ll start promoting it to employers the week of January 17th

import React from "react";

export const DemoDayButton = () => {
  return (
    <>
      <a href="https://www.nashss.com/demoday" target="_blank" rel="noreferrer">
        <div className="demo-day-btn">
          <div className="btn-item">Join Us For Demo Day</div>
        </div>
      </a>
    </>
  );
};
