//Purpose: Creates and displays the Tech Stack button
import React from "react";

export const TechStackButton = ({ stackItem }) => {
  return (
    <>
      <li className="tech-stack-btn">
        <span>{stackItem.name}</span>
      </li>
    </>
  );
};
