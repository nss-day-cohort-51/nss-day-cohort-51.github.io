//Purpose: Creates and displays the Demo Day button component
//https://www.nashss.com/demoday - will not redirect to our eventbrite page until January 12th. We’ll start promoting it to employers the week of January 17th

import React from "react";
import { Nav } from "react-bootstrap";

export const DemoDayButton = () => {
  return (
    <>
      <Nav.Link href="https://www.nashss.com/demoday" className="rsvp">
        <span className="demo-day-btn">
          <span className="btn-item">Join Us For Demo Day</span>
        </span>
      </Nav.Link>

      {/* <div className="demo-day-btn">
        <div className="btn-item">Join Us For Demo Day</div>
      </div> */}
    </>
  );
};
