import React from "react";
import { DemoDayButton } from "../components/DemoDayButton";
import { TypingText2 } from "../components/TextAnimation";
import "../styles/custom.scss";

export const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div
          className="typing-holder"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <TypingText2 />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarText"
          data-toggle="collapse"
          data-target=".navbar-collapse"
        >
          <ul className="navbar-nav nav-menu ms-auto">
            <li className="nav-item">
              <a href="#devList">DEVELOPERS</a>
            </li>
            <li className="nav-item">
              <a href="#techStack">TECH STACK</a>
            </li>
            <li className="nav-item">
              <a href="#thanksLocation">THANKS</a>
            </li>
            <li id="demoday">
              <div className="rsvp">
                <DemoDayButton />
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
