//Purpose: Creates and displays the Developer Card component

import React from "react";
import { MediaIcons } from "../components/MediaIcons";
import { CapBtn } from "../components/MediaButtons";
import "../styles/custom.scss";
import { buttonColor, borderColor, DevCardAddClass } from "./helpers";
import { IconName } from "react-icons/fa";

export const DevCard = ({ obj, allTechStack }) => {
  return (
    <>
      <div className="dev-card">
        <section
          className={
            "dev-card-title__block" + " " + DevCardAddClass(obj?.title)
          }
        >
          <h5 className="dev-card__title">{obj?.title}</h5>
        </section>
        <section
          className={"dev-card__body" + " " + DevCardAddClass(obj?.title)}
        >
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
          <div className="dev-card__icons">
            <MediaIcons key={obj.id} obj={obj} />
          </div>

          <div className="dev-card__podcast">
            <div className="card-pod-wrapper"></div>
          </div>
          <div className="interest-fact__container">
            <h6>Fun Fact:</h6>
            <p className="dev-card__fact">{obj?.fact}</p>
          </div>
        </section>
        <section className="dev-card__actions">
          <section className="dev-card-button__block">
            <div className={buttonColor(obj?.title)}>
              {" "}
              <a
                href={obj?.resume}
                target="_blank"
                rel="noreferrer"
                className="dev-card__button resume-site__link"
              >
                RESUME{" "}
              </a>
            </div>
            <div className={buttonColor(obj?.title)}>
              {" "}
              <a
                href={obj?.personal}
                target="_blank"
                rel="noreferrer"
                className="dev-card__button personal-site__link"
              >
                PORTFOLIO{" "}
              </a>
            </div>{" "}
            <CapBtn obj={obj} allTechStack={allTechStack} />
          </section>
        </section>
      </div>
    </>
  );
};
