//Purpose: Creates and displays the Tech Stack button

import React from "react";
import "../styles/custom.scss";

export const TechStackButton = ({ stackItem }) => {
  return (
    <>
      <li className="tech-stack-btn">{stackItem.name}</li>
    </>
  );
};

