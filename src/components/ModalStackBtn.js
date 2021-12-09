//Purpose: Creates and displays the Modal Stack button

import React from "react";

export const ModalStackBtn = ({ tech }) => {
  return (
    <>
      <div className="tech-btn colors">{tech.name}</div>
    </>
  );
};
