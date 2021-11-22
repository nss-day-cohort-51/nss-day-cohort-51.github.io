//Purpose: Creates and displays the Developer List component

import React from "react";
import { DevCard } from "../components/DevCard";
import "../styles/_colors.scss";
import "../styles/custom.scss";

export const DevList = () => {
  return (
    <>
      <div className="dev-list">
        <DevCard />
      </div>
    </>
  );
};
