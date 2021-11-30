//Purpose: Creates and displays the Tech Stack component

import React from "react";
import "../styles/techstack.scss";
import { TechStackButton } from "./TechStackButton";

export const TechStack = ({ allTechStack }) => {
const allStack = allTechStack.filter(stackObj => stackObj.devType === "All")
const allTheFrontEndStack = allTechStack.filter(stackObj => stackObj.devType === "UI/UX Front-End Developer")
const allTheFullStack = allTechStack.filter(stackObj => stackObj.devType === "Full Stack Developer")

  return (
    <>
      <section id="techStack" className="tech-stack">
        <h2>Tech Stack</h2>
        <section id="combined-stack__block">
          <h4>We All Learned the Following</h4>
          <section id="combined-stack-list__block">
            <ul id="combined-stack__list" className="no-bullet__list">
              {" "}
              {allStack.map((stackItem) => (
                <TechStackButton key={stackItem.id} stackItem={stackItem} />
              ))}
            </ul>
          </section>
        </section>
{/* <hr className="techStack__divider" /> */}
        <section id="stacks-by-type__block">
          <section id="front-end-stack__block">
            {" "}
            <h4>UI/UX FRONT-END</h4>
            <ul id="frontend-stack__list" className="no-bullet__list">
            {allTheFrontEndStack.map((stackItem) => (
                <TechStackButton key={stackItem.id} stackItem={stackItem} />
              ))}
            </ul>
          </section>
          <section id="full-stack__block">
            {" "}
            <h4>FULL STACK</h4>
            <ul  id="full-stack__list" className="no-bullet__list">
            {allTheFullStack.map((stackItem) => (
                <TechStackButton key={stackItem.id} stackItem={stackItem} />
              ))}
            </ul>
          </section>
        </section>
      </section>
    </>
  );
};
