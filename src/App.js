import React from "react";
import { NavBar } from "./components/NavBar";
import { Description } from "./components/Description";
import { DevList } from "./components/DevList";
import { TechStack } from "./components/TechStack";
import { ThanksLocation } from "./components/ThanksLocation";
import { Footer } from "./components/Footer";
import "./styles/_colors.scss";
import "./styles/custom.scss";

export const App = () => {
  return (
    <div className="page">
      <NavBar />
      <Description />
      <DevList />
      <TechStack />
      <ThanksLocation />
      <Footer />
    </div>
  );
};

export default App;
