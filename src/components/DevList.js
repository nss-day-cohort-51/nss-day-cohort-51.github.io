//Purpose: Creates and displays the Developer List component

import React from "react";
import { DevCard } from "../components/DevCard";
import "../styles/custom.scss";

export const DevList = ({ allDevs }) => {

  return (
    <>
      <div id="devList" className="dev-list">
        {allDevs.map((obj) => (
          <DevCard key={obj.id} obj={obj} />
        ))}
      </div>
    </>
  );
};
