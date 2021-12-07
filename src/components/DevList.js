//Purpose: Creates and displays the Developer List component

import React from "react";
import { ScrollingText } from "./TextAnimation";
// import ScrollableAnchor from "react-scrollable-anchor";
import { DevCard } from "../components/DevCard";
import "../styles/custom.scss";

export const DevList = ({ allDevs, allTechStack }) => {
  return (
    <>
      {/* <ScrollableAnchor id={"devList"}></ScrollableAnchor> */}
      <div className="dev-list__section">
        <section className="devList-title__block">
          <h2 className="devList__title">
            Our Developers are out of this world!
          </h2>{" "}
        </section>
        <section className="scrolling-text__block">
          <ScrollingText />
        </section>
        <section className="dev-list">
          {allDevs.map((obj) => (
            <DevCard key={obj.id} obj={obj} allTechStack={allTechStack} />
          ))}
        </section>
      </div>
    </>
  );
};
