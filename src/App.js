import React, { useEffect, useState } from "react";
import { NavBar } from "./components/NavBar";
import { Description } from "./components/Description";
import { DevList } from "./components/DevList";
import { TechStack } from "./components/TechStack";
import { ThanksLocation } from "./components/ThanksLocation";
import { Footer } from "./components/Footer";
import "./styles/_colors.scss";
import "./styles/custom.scss";

export const App = () => {
  const [allDevs, setAllDevs] = useState([])
  const [allTechStack, setTechStack] = useState([])

  useEffect(() => {
    fetch("api/database.json")
    .then((res) => res.json())
    .then((data) => {
      setAllDevs(data.users);
      setTechStack(data.techStack)
    });
  }, []);
  return (
    <div className="page">
      <NavBar />
      <Description />
      <DevList allDevs={allDevs} />
      <TechStack allTechStack={allTechStack} />
      <ThanksLocation />
      <Footer />
    </div>
  );
};

export default App;
