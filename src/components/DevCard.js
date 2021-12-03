//Purpose: Creates and displays the Developer Card component

import React from "react";
import { MediaIcons } from "../components/MediaIcons";
// import { Example } from "../components/Example";
import { CapBtn, PodPlayer } from "../components/MediaButtons";
import "../styles/custom.scss";
import { buttonColor, borderColor, DevCardTitleBG } from "./helpers";

export const DevCard = ({ obj }) => {
  return (
    <>
      <div className="dev-card">
        <section className={DevCardTitleBG(obj?.title)}>
          <h5 className="dev-card__title">{obj?.title}</h5>
        </section>
        <section className="dev-card__body">
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
          <div className="interest-fact__container">
            <h6>Fun Fact:</h6>
            <p className="dev-card__fact">{obj?.fact}</p>
          </div>



          {/* <div className="dev-card__podcast">
            <div className="card-pod-wrapper">
              <h5>NSS Interview</h5>
              <PodPlayer />
            </div>
            <div className="modal-pod">
              <div className="pod-title">Podcast Interview</div>
              <div className="pod-wrapper">
                <iframe
                  title="Podcast Player"
                  width="80%"
                  height="20"
                  scrolling="no"
                  frameBorder="no"
                  src="https://w.soundcloud.com/player/?url=https://soundcloud.com/discord96/materia-primoris-the-x-files-theme-full-illuminati-song&color=#82bad9&color=%23ff5500&inverse=true&auto_play=false&show_user=true"
                ></iframe>
              </div>
            </div>
          </div> */}
        </section>
        <section className="dev-card__actions">
                    <section className="dev-card-button__block">
            <CapBtn obj={obj} />

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
                PERSONAL SITE{" "}
              </a>
            </div>
          </section>
        </section>
      </div>
    </>
  );
};
