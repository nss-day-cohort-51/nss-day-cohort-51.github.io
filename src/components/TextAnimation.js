import React from "react";
import Typewriter from "typewriter-effect";
import alienface from "../images/alienface.svg";
import "../styles/custom.scss";

export const ScrollingText = () => {
  return (
    <>
      <div class="content">
        <div class="content__container">
          <p class="content__container__text">We are</p>

          <ul class="content__container__list">
            <li class="content__container__list__item">developers</li>
            <li class="content__container__list__item">full stack</li>
            <li class="content__container__list__item">ui/ux designers</li>
            <li class="content__container__list__item">ready to work!</li>
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
          // backgroundHeight: "0.5em",
          backgroundSize: `52px 33px`,
          backgroundRepeat: `no-repeat`,
          backgroundPosition: `69% 48%`,
        }}
      >
        <p>COHORT 51</p>
        {/* <div className="dynamic"> */}
        {/* <Typewriter
            id="typewriter"
            options={{
              strings: ["COHORT 51"],
              autoStart: true,
              loop: true,
              delay: "natural",
              stop: true,
            }}
          /> */}
        {/* </div> */}
      </div>
    </>
  );
};

<Typewriter
  onInit={(typewriter) => {
    typewriter
      .typeString("Hello World!")
      .callFunction(() => {
        console.log("String typed out!");
      })
      .pauseFor(2500)
      .deleteAll()
      .callFunction(() => {
        console.log("All strings were deleted");
      })
      .start();
  }}
/>;
