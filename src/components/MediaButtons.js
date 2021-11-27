//Purpose: Creates and displays the Media button component

import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "../styles/custom.scss";

export const CapBtn = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="cap-btn" onClick={handleShow}>
        CAPSTONE
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
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
          width="82%"
          height="166"
          scrolling="no"
          frameborder="no"
          src={`https://w.soundcloud.com/player/?url=https://soundcloud.com/discord96/materia-primoris-the-x-files-theme-full-illuminati-song&color=#82bad9`}
        ></iframe>
      </div>
    </>
  );
};
