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
        <a
          href={stackItem.url}
          title={stackItem.name}
          target="_blank"
          className={linkClass(stackItem.url)}
          rel="noreferrer"
        >
          {stackItem.name}
        </a>
      </li>
    </>
  );
};
