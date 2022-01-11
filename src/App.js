import React, { useEffect, useState } from "react";
import { NavBar2 } from "./components/NavBar2";
import { Description } from "./components/Description";
import { DevList } from "./components/DevList";
import { CallToActionSection } from "./components/CallToActionSection";
import { TechStack } from "./components/TechStack";
import { ThanksLocation } from "./components/ThanksLocation";
import { Footer } from "./components/Footer";
// import "./styles/custom.scss";

export const App = () => {
  const [allDevs, setAllDevs] = useState([]);
  const [allTechStack, setTechStack] = useState([]);

  useEffect(() => {
    fetch("api/database.json")
      .then((res) => res.json())
      .then((data) => {
        setAllDevs(data.users);
        setTechStack(data.techStack);
      });
  }, []);
  return (
    <div className="page">
      <NavBar2 />
      <Description />
      <DevList allDevs={allDevs} allTechStack={allTechStack} />
      <CallToActionSection />
      <TechStack allTechStack={allTechStack} />
      <ThanksLocation />
      <Footer />
    </div>
  );
};
