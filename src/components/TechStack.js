//Purpose: Creates and displays the Tech Stack component

import React from "react";
import { TechStackButton } from "./TechStackButton";

export const TechStack = ({ allTechStack }) => {
  const allStack = allTechStack.filter(
    (stackObj) => stackObj.devType === "All"
  );
  const allTheFrontEndStack = allTechStack.filter(
    (stackObj) => stackObj.devType === "UI/UX Front-End Developer"
  );
  const allTheFullStack = allTechStack.filter(
    (stackObj) => stackObj.devType === "Full Stack Developer"
  );

  return (
    <>
      <section id="techStack" className="tech-stack">
        <div className="background-overlay"></div>
        <h2 className="section__title">Tech Stack</h2>
        <section id="combined-stack__block">
          <section id="combined-stack-list__block" className="list__block">
            {" "}
            <h4>Cohort 51 Combined</h4>
            <ul
              id="combined-stack__list"
              className="stack__list no-bullet__list"
            >
              {" "}
              {allStack.map((stackItem) => (
                <TechStackButton key={stackItem.id} stackItem={stackItem} />
              ))}
            </ul>
          </section>
        </section>
        <hr className="techStack__divider" />
        <section id="stacks-by-type__block">
          {" "}
          <section id="full-stack__block" className="list__block">
            {" "}
            <h4>Full Stack</h4>
            <ul id="full-stack__list" className="stack__list no-bullet__list">
              {allTheFullStack.map((stackItem) => (
                <TechStackButton key={stackItem.id} stackItem={stackItem} />
              ))}
            </ul>
          </section>
          <section id="front-end-stack__block" className="list__block">
            {" "}
            <h4>UI/UX Front-End</h4>
            <ul
              id="frontend-stack__list"
              className="stack__list no-bullet__list"
            >
              {allTheFrontEndStack.map((stackItem) => (
                <TechStackButton key={stackItem.id} stackItem={stackItem} />
              ))}
            </ul>
          </section>
        </section>
      </section>
    </>
  );
};
