//Purpose: Creates and displays the Media button component

import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { MediaIcons } from "../components/MediaIcons";
import "../styles/custom.scss";
import { buttonColor, colorSet } from "./helpers";

export const CapBtn = ({ obj }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className={buttonColor(obj.title)}>
        <span
          className="dev-card__capstone dev-card__button"
          onClick={handleShow}
        >
          LEARN MORE
        </span>
      </div>

      <Modal size="xl" show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="modal-name">{obj?.name}</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-wrapper">
            <div className="modal-list__left">
              {/* <div className="modal-pic">
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
              </div> */}
              <div className="modal-devtitle">
                {obj?.title}
                <div className="modal-icons">
                  <MediaIcons key={obj.id} obj={obj} />
                </div>

                {/* <div className="modal-intfact-wrapper">
                  <div className="modal-interests">
                    <strong>Industry Interest: </strong>
                    {obj?.interests}
                  </div>
                  <div className="modal-fact">
                    <strong>Fun Fact: </strong>
                    {obj?.fact}
                  </div>
                </div> */}

                <div className="modal-pod">
                  <div className="pod-title">NSS Capstone Interview</div>
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
              </div>
            </div>
            <div className="modal-list__right">
              <h4>Capstone Video Demos</h4>
              <div className="capstone-wrapper">
                <div className="cap1">
                  <h5>{obj?.capName}</h5>
                  <iframe
                    width="340"
                    height="235"
                    src={obj?.capLink}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="cap2">
                  <h5>{obj?.cap2Name}</h5>
                  <iframe
                    width="340"
                    height="235"
                    src={obj?.cap2Link}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} variant="primary">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export const PodPlayer = () => {
  return (
    <>
      <div className="pod-player">
        <iframe
          title="Podcast Player"
          color="#fff"
          width="80%"
          height="20"
          scrolling="no"
          frameBorder="no"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/197966393&color=%23747e80&inverse=false&auto_play=false&show_user=true"
        ></iframe>
      </div>
    </>
  );
};

// &color=%23747e80

// "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/197966393&color=%23747e80&inverse=false&auto_play=false&show_user=true"
