//Purpose: Creates and displays the Developer List component

import React from "react";
import { DevCard } from "../components/DevCard";
import "../styles/custom.scss";
import { useEffect, useState } from "react";
import { getAllDevs } from "./APIManager";

export const DevList = () => {

  const [allDevs, setAllDevs] = useState([]);
  const getDevs = () => {
      getAllDevs().then(allDevsFromAPI => {

          console.log("alldevfrom api are", allDevsFromAPI);
          setAllDevs(allDevsFromAPI)

      });
  };

  useEffect(() => {
    getDevs();
}, []);


  return (
    <>
      <div id="devList" className="dev-list">
      {allDevs.map(obj =><DevCard key={obj.id} obj={obj}/>)}
      </div>
    </>
  );
};
