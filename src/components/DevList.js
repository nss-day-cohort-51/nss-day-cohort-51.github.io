//Purpose: Creates and displays the Developer List component

import React from "react";
import { ScrollingText } from "./components/TextAnimation";
import { DevCard } from "../components/DevCard";
import "../styles/custom.scss";

export const DevList = ({ allDevs }) => {
  return (
    <>
      <div id="devList" className="dev-list">
        <ScrollingText />

        {allDevs.map((obj) => (
          <DevCard key={obj.id} obj={obj} />
        ))}
      </div>
    </>
  );
};
