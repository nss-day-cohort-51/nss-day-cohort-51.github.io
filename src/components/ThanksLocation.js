//Purpose: Wrapper for Thanks & Location components

import React from "react";
import { Thanks } from "../components/Thanks";
import { Location } from "../components/Location";

import "../styles/_colors.scss";
import "../styles/custom.scss";

export const ThanksLocation = () => {
  return (
    <>
      <div id="thanksLocation" className="thanks-location">
        <div className="thanks-location__thanks">
          <Thanks />
        </div>
        <div className="thanks-location__location">
          <Location />
        </div>
      </div>
    </>
  );
};
