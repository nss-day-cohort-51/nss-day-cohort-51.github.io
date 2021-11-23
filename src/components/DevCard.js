//Purpose: Creates and displays the Developer Card component

import React from "react";
import "../styles/_colors.scss";
import "../styles/custom.scss";
import {Fav} from './Fav';

export const DevCard = ({devId}) => {
  return (
    <>
      <div className="dev-card">
        DEVCARD
        <Fav devId={devId} />
      </div>
    </>
  );
};
