//Purpose: Creates and displays the Tech Stack button

import React from "react";

export const TechStackButton = ({ stackItem }) => {
  const linkClass = (URLvalue) => {
    let linkExists = "";
    if (URLvalue === "") {
      linkExists = "noLink";
    } else {
      linkExists = "hasLink";
    }
    return linkExists;
  };
  return (
    <>
      <li className="tech-stack-btn">
        <span>{stackItem.name}</span>
      </li>
    </>
  );
};
