//Purpose: Creates and displays the Media button component
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { MediaIcons } from "../components/MediaIcons";
import { ModalTech } from "../components/ModalTech";
import { buttonColor, colorSet } from "./helpers";

export const ModalBtn = ({ obj, allTechStack }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const checkForCapLink = (capLinkString) => {
    let capLink;

    if (
      capLinkString.includes("youtube") ||
      capLinkString.includes("youtu.be")
    ) {
      capLink = (
        <iframe
          width="340"
          height="235"
          src={obj?.capLink}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      );
    } else {
      if (capLinkString === "#") {
        capLink = (
          <div className="alien-placeholder__image">
            <img
              src="alien-coming-soon-340w-235h.gif"
              alt="Coming Soon"
              className="placeholder__image"
            />
          </div>
        );
      } else {
        capLink = (
          <div className="repo-placeholder__block">
            <a
              href={obj.capRepo}
              title={`${obj?.capName} Repo`}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={capLinkString}
                alt="Capstone"
                className="repo-placeholder__image"
              />
            </a>
          </div>
        );
      }
    }
    return capLink;
  };

  return (
    <>
      <div className={buttonColor(obj.title)} onClick={handleShow}>
        LEARN MORE
      </div>
      <Modal size="xl" show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="modal-name">
              {obj?.name}
              {/* <Fav devId={obj?.id} /> */}
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-content-wrapper">
            <div className="modal-list__left">
              <div className="modal-pic">
                {obj?.pic ? (
                  <img
                    src={require(`../images/${obj?.pic}`).default}
                    alt={obj?.name}
                    className={colorSet(obj.title)}
                  />
                ) : (
                  <img
                    src={require(`../images/default.png`).default}
                    alt="default-user"
                    className="default"
                  />
                )}
              </div>
              <div className="modal-icons">
                <MediaIcons key={obj.id} obj={obj} />
              </div>
              <div className="modal-dev-title">{obj?.title}</div>

              <div className="modal-tech">
                <ModalTech key={obj.id} dev={obj} allTechStack={allTechStack} />
              </div>

              {obj?.pod !== "#" ? <PodPlayer /> : null}
            </div>
            <div className="modal-list__right">
              <h4>Capstones</h4>
              <div className="capstone-wrapper">
                <div className="cap1">
                  <h5>
                    <a
                      href={obj.capRepo}
                      title={`${obj?.capName} Repo`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {obj?.capName}
                    </a>
                  </h5>
                  <p className="cap1 capstone-description">
                    {obj?.capDescription}
                  </p>
                  {checkForCapLink(obj?.capLink)}
                </div>

                {/* If no capstone 2, do not display the section for capstone 2 anything */}

                {obj.cap2Name !== "" ? (
                  <div className="cap2">
                    <h5>{obj?.cap2Name}</h5>
                    <p className="cap2 capstone-description">
                      {obj?.cap2Description}
                    </p>

                    {checkForCapLink(obj?.cap2Link)}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} variant={colorSet(obj.title)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export const DevCardBtn = ({ obj, btnText }) => {
  return (
    <>
      <div className={buttonColor(obj.title)}>
        <div className="dev-card__btn">{btnText}</div>
      </div>
    </>
  );
};

const PodPlayer = () => {
  return (
    <>
      <div className="modal-pod pod-player">
        <div className="modal-pod__title">NSS Capstone Interview</div>
        <div className="modal-pod__text">
          Check out the podcast interview about my capstone!
        </div>
        <div className="modal-pod__wrapper">
          <iframe
            title="Podcast Player"
            width="95%"
            height="20"
            scrolling="no"
            frameBorder="no"
            src="https://w.soundcloud.com/player/?url=https://soundcloud.com/discord96/materia-primoris-the-x-files-theme-full-illuminati-song&color=#82bad9&color=%23ff5500&inverse=true&auto_play=false&show_user=true"
          ></iframe>
        </div>
      </div>
    </>
  );
};
