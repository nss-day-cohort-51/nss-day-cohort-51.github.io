//Purpose: Creates and displays the NavBar component

import React from "react";
import { Scrollchor } from "react-scrollchor";
import { DemoDayButton } from "../components/DemoDayButton";
import "../styles/custom.scss";

export const NavBar = () => {
  return (
    <>
      <div className="nav-bar">
        <div className="nav-bar__left">
          <p>COHORT 51</p>
        </div>

        <div className="nav-bar__middle">
          <ul className="nav-menu">
            <li>
              <Scrollchor to="#devList">DEVELOPERS</Scrollchor>
            </li>
            <li>
              <Scrollchor to="#techStack">TECH STACK</Scrollchor>
            </li>
            <li>
              <Scrollchor to="#thanksLocation">THANKS</Scrollchor>
            </li>
          </ul>
        </div>
        <div className="nav-bar__right">
          <div className="rsvp">
            <DemoDayButton />
          </div>
        </div>
      </div>
    </>
  );
};
