//Purpose: Creates and displays the Developer Card component

import React from "react";
import { MediaIcons } from "../components/MediaIcons";
import "../styles/custom.scss";

export const DevCard = ({ obj }) => {
  console.log("obj", obj);
  console.log("obj.name", obj.name);
  return (
    <>
      <div className="dev-card">
        <div className="dev-card__title">{obj?.title}</div>
        <div className="dev-card__pic">
          {obj?.pic ? (
            <img
              src={require(`../images/${obj?.pic}`).default}
              alt={obj?.name}
              className=""
            />
          ) : (
            <img
              src={require(`../images/default.png`).default}
              alt="default-user"
              className=""
            />
          )}
        </div>
        <div className="dev-card__name">{obj?.name}</div>
        <div className="dev-card__interests">{obj?.interests}</div>
        <div className="dev-card__icons">
          <MediaIcons key={obj.id} obj={obj} />
        </div>
        <div className="dev-card__capstone">CAPSTONE BUTTON</div>
        <div className="dev-card__podcast">PODCAST BUTTON</div>
      </div>
    </>
  );
};
