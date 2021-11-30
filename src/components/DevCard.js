//Purpose: Creates and displays the Developer Card component

import React from "react";
import { MediaIcons } from "../components/MediaIcons";
import { CapBtn, PodPlayer } from "../components/MediaButtons";
import "../styles/custom.scss";
import {Fav} from './Fav';

export const DevCard = ({ obj }) => {
  
  return (
    <>
      <div className="dev-card">
        
        <div className="dev-card__title">{obj?.title}</div>
        <div className="dev-card__pic">
          {obj?.pic ? (
            <img
              src={require(`../images/${obj?.pic}`).default}
              alt={obj?.name}
              className="card-pic" />
          ) : (
            <img
              src={require(`../images/default.png`).default}
              alt="default-user"
              className="card-pic"
            />
          )}
        </div>
        <div className="dev-card__name">{obj?.name}</div>
        <Fav devId={obj.id} />
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
