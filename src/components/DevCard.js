//Purpose: Creates and displays the Developer Card component
import React from "react";
import { MediaIcons } from "../components/MediaIcons";
import { ModalBtn } from "../components/MediaButtons";
import { buttonColor, borderColor, DevCardAddClass } from "./helpers";
import { Fav } from "./Fav";

export const DevCard = ({ obj, allTechStack }) => {
  return (
    <>
      <div id={obj?.name} className="dev-card">
        <section
          className={`dev-card-title__block ${DevCardAddClass(obj?.title)}`}
        >
          <h5 className="dev-card__title">{obj?.title}</h5>
        </section>
        <section className={`dev-card__body ${DevCardAddClass(obj?.title)}`}>
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
          <div className="dev-card__name">
            {obj?.name}{" "}
            <Fav devId={obj?.id} />
          </div>
          <div className="dev-card__icons">
            <MediaIcons key={obj.id} obj={obj} />
          </div>
          <div className="fact-container">
            <h6>Fun Fact:</h6>
            <p className="dev-card__fact">{obj?.fact}</p>
          </div>
        </section>
        <section className="dev-card__actions">
          <section className="dev-card-button__block">
            <a href={obj?.resume} target="_blank" rel="noreferrer">
              <div className={buttonColor(obj?.title)}>RESUME</div>
            </a>
            <a href={obj?.personal} target="_blank" rel="noreferrer">
              {obj?.personal.includes("github.com") ? (
                <div className={buttonColor(obj?.title)}>GITHUB</div>
              ) : (
                <div className={buttonColor(obj?.title)}>PORTFOLIO</div>
              )}
            </a>
            <span title={`More about ${obj?.name}`}>
              <ModalBtn obj={obj} allTechStack={allTechStack} />
            </span>
          </section>
        </section>
      </div>
    </>
  );
};
