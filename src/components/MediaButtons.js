//Purpose: Creates and displays the Media button component

import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { MediaIcons } from "../components/MediaIcons";
import "../styles/custom.scss";

export const CapBtn = ({ obj }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="cap-btn" onClick={handleShow}>
        CAPSTONE
      </div>
      <div className="modal">
        <Modal size="xl" show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>
              <div className="modal-name">{obj?.name}</div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="modal-wrapper">
              <div className="modal-list__left">
                <div className="modal-pic">
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
                <div className="modal-title">
                  {obj?.title}
                  <div className="modal-icons">
                    <MediaIcons key={obj.id} obj={obj} />
                  </div>
                </div>
              </div>
              <div className="modal-list__right">
                <div className="modal-interests">{obj?.interests}</div>
                <div className="dev-card__fact">{obj?.fact}</div>
                <div className="capstone-wrapper">
                  <div className="cap1">
                    <iframe
                      width="360"
                      height="202"
                      src={obj?.capLink}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div className="cap2">
                    <iframe
                      width="360"
                      height="202"
                      src={obj?.cap2Link}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
                <div className="modal-pod">
                  <iframe
                    title="Podcast Player"
                    width="80%"
                    height="20"
                    scrolling="no"
                    frameborder="no"
                    src="https://w.soundcloud.com/player/?url=https://soundcloud.com/discord96/materia-primoris-the-x-files-theme-full-illuminati-song&color=#82bad9&color=%23ff5500&inverse=true&auto_play=false&show_user=true"
                  ></iframe>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export const PodPlayer = () => {
  return (
    <>
      <div className="pod-player">
        {/* <iframe
          title="Podcast Player"
          width="82%"
          height="166"
          scrolling="no"
          frameborder="no"
          src={`https://w.soundcloud.com/player/?url=https://soundcloud.com/discord96/materia-primoris-the-x-files-theme-full-illuminati-song&color=#82bad9`}
        ></iframe> */}

        <iframe
          title="Podcast Player"
          width="80%"
          height="20"
          scrolling="no"
          frameborder="no"
          src="https://w.soundcloud.com/player/?url=https://soundcloud.com/discord96/materia-primoris-the-x-files-theme-full-illuminati-song&color=#82bad9&color=%23ff5500&inverse=true&auto_play=false&show_user=true"
        ></iframe>
      </div>
    </>
  );
};
