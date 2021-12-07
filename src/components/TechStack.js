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
      <section id="techStack" className="tech-stack background-overlay">
        <div className="background-overlay"></div>
        <h2>Tech Stack</h2>
        <section id="combined-stack__block">
          <section id="combined-stack-list__block" className="list__block">
            <h4 className="section__title">We All Learned the Following</h4>
            <p className="combined__description">
              Our hybrid cohort developed skills and resources.
            </p>

            <ul
              id="combined-stack__list"
              className="no-bullet__list stack__list"
            >
              {" "}
              {allStack.map((stackItem) => (
                <TechStackButton key={stackItem.id} stackItem={stackItem} />
              ))}
            </ul>
          </section>{" "}
          <section id="stacks-by-type__block">
            <section id="front-end-stack__block" className="list__block">
              {" "}
              <h4 className="section__title">UI/UX FRONT-END</h4>
              <p className="front-end__description">
                Front-End Devs focused on streamlining web application design
                and user experience.
              </p>
              <ul
                id="frontend-stack__list"
                className="no-bullet__list stack__list"
              >
                {allTheFrontEndStack.map((stackItem) => (
                  <TechStackButton key={stackItem.id} stackItem={stackItem} />
                ))}
              </ul>
            </section>
            <section id="full-stack__block" className="list__block">
              {" "}
              <h4 className="section__title">FULL STACK</h4>
              <p className="full-stack__description">
                Full-Stack Devs focused on the backend and functionality of a
                web application.
              </p>
              <ul id="full-stack__list" className="no-bullet__list stack__list">
                {allTheFullStack.map((stackItem) => (
                  <TechStackButton key={stackItem.id} stackItem={stackItem} />
                ))}
              </ul>
            </section>
          </section>
        </section>
      </section>
    </>
  );
};
