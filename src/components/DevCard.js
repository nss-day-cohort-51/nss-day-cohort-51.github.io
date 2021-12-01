//Purpose: Creates and displays the Developer Card component

import React from "react";
import { MediaIcons } from "../components/MediaIcons";
// import { Example } from "../components/Example";
import { CapBtn, PodPlayer } from "../components/MediaButtons";
import "../styles/custom.scss";

export const DevCard = ({ obj }) => {
  const borderColor = (title) => {
    if (title === "FULL STACK DEVELOPER") {
      return "fsYellow";
    } else {
      return "feBlue";
    }
  };

  return (
    <>
      <div className="dev-card">
        <div className="dev-card__title">{obj?.title}</div>
        <div className="dev-card__pic">
          {obj?.pic ? (
            <img
              src={require(`../images/${obj?.pic}`).default}
              alt={obj?.name}
              className={borderColor(obj.title)}
            />
          ) : (
            <img
              src={require(`../images/default.png`).default}
              alt="default-user"
              className="card-pic"
            />
          )}
        </div>
        <div className="dev-card__name">{obj?.name}</div>
        <div className="interest-fact__container">
          <div>
            <p>Industry Interest:</p>
            <div className="dev-card__interests">{obj?.interests}</div>
          </div>
          <div>
            <p>Fun Fact:</p>
            <div className="dev-card__fact">{obj?.fact}</div>
          </div>
        </div>
        <div className="dev-card__icons">
          <MediaIcons key={obj.id} obj={obj} />
        </div>
        <div className="dev-card__capstone">
          <CapBtn obj={obj} />
        </div>
        <div className="dev-card__podcast">
          <PodPlayer />
        </div>
      </div>
    </>
  );
};
