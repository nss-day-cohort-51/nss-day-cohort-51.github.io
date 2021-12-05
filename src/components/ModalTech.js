//Purpose: Creates and displays the Tech Stack component

import React from "react";
import { ModalStackBtn } from "./ModalStackBtn";

export const ModalTech = ({ dev, allTechStack }) => {
  const allDevs = allTechStack.filter((stackObj) => stackObj.devType === "All");

  const allUX = allTechStack.filter(
    (stackObj) => stackObj.devType === "UI/UX Front-End Developer"
  );
  const allFullStack = allTechStack.filter(
    (stackObj) => stackObj.devType === "Full Stack Developer"
  );

  return (
    <>
      <div className="modal-tech__wrapper">
        <div className="all-devs spacing">
          {allDevs.map((tech) => (
            <ModalStackBtn key={tech.id} tech={tech} />
          ))}
        </div>
        <div className="modal-tech__dev">
          {dev.title === "FULL STACK DEVELOPER" ? (
            <div className="fs-btn spacing">
              {allFullStack.map((tech) => (
                <ModalStackBtn key={tech.id} tech={tech} />
              ))}
            </div>
          ) : (
            <div className="ux-btn spacing">
              {allUX.map((tech) => (
                <ModalStackBtn key={tech.id} tech={tech} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
