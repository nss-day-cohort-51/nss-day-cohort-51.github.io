import React from "react";
import Typewriter from "typewriter-effect";
import alienface from "../images/alienface.svg";
import "../styles/custom.scss";

export const ScrollingText = () => {
  return (
    <>
      <div className="content">
        <div className="content__container">
          <p className="content__container__text">We are</p>

          <ul className="content__container__list">
            <li className="content__container__list__item">developers</li>
            <li className="content__container__list__item">full stack</li>
            <li className="content__container__list__item">ui/ux designers</li>
            <li className="content__container__list__item">ready to work!</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export const TypingText1 = () => {
  return (
    <>
      <div className="typewriter1">
        <div className="static">We are&nbsp;</div>
        <div className="dynamic">
          <Typewriter
            id="typewriter"
            options={{
              strings: [
                " front-end developers!",
                " UI/UX designers!",
                " C# and .Net developers!",
                " ready to work!",
              ],
              autoStart: true,
              loop: true,
              delay: "natural",
            }}
          />
        </div>
      </div>
    </>
  );
};

export const TypingText2 = () => {
  return (
    <>
      <div
        className="typewriter2"
        style={{
          backgroundImage: `url(${alienface})`,
          backgroundSize: `52px 33px`,
          backgroundRepeat: `no-repeat`,
          backgroundPosition: `67% 48%`,
        }}
      >
        <div className="dynamic">
          <Typewriter
            id="typewriter"
            options={{
              strings: ["COHORT 51"],
              autoStart: true,
              loop: true,
              delay: "natural",
              pauseFor: "4000ms",
              stop: false,
            }}
          />
        </div>
      </div>
    </>
  );
};
