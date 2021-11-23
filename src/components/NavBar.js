//Purpose: Creates and displays the NavBar component

import React from "react";
import { Link } from "react-router-dom";
import { DemoDayButton } from "../components/DemoDayButton";
import "../styles/_colors.scss";
import "../styles/custom.scss";

export const NavBar = () => {
  return (
    <>
      <div className="nav-bar">
        <div className="nav-bar__left"></div>

        <div className="nav-bar__middle">
          <ul className="nav-menu">
            <li className="nav-menu__item">
              <Link to="#description">ABOUT</Link>
            </li>
            <li className="nav-menu__item">
              <Link to="#dev-list">DEVELOPERS</Link>
            </li>
            <li className="nav-menu__item">
              <Link to="thanks-location">THANKS</Link>
            </li>
            <li className="nav-menu__item">
              <Link to="tech-stack">TECH STACK</Link>
            </li>
            <li className="nav-menu__item">
              <Link to="tech-stack">
                <DemoDayButton />
              </Link>
            </li>
          </ul>
        </div>

        <div className="nav-bar__right"></div>
      </div>
    </>
  );
};
