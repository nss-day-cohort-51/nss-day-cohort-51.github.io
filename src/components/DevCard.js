//Purpose: Creates and displays the Developer Card component

import React from "react";
import { MediaIcons } from "../components/MediaIcons";
import { CapBtn } from "../components/MediaButtons";
import "../styles/custom.scss";
import { buttonColor, borderColor } from "./helpers";

export const DevCard = ({ obj, allTechStack }) => {
  return (
    <>
      <div className="dev-card">
        <div className="dev-card__title">{obj?.title}</div>
        <div className="dev-card__pic">
          {obj?.pic ? (
            <img
              src={require(`../images/${obj?.pic}`).default}
              alt={obj?.name}
              className={borderColor(obj?.title)}
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
          <CapBtn obj={obj} allTechStack={allTechStack} />
        </div>

        <a href={obj?.resume} target="_blank" rel="noreferrer">
          <div className={buttonColor(obj?.title)}>RESUME</div>
        </a>

        <a href={obj?.personal} target="_blank" rel="noreferrer">
          <div className={buttonColor(obj?.title)}>PERSONAL SITE</div>
        </a>

        <div className="dev-card__podcast">
          <div className="card-pod-wrapper"></div>
        </div>
      </div>
    </>
  );
};
