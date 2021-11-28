import React from "react";
import { NavBar } from "./components/NavBar";
import { Description } from "./components/Description";
import { DevList } from "./components/DevList";
import { ScrollingText, TypingText1 } from "./components/TextAnimation";
import { TechStack } from "./components/TechStack";
import { ThanksLocation } from "./components/ThanksLocation";
import { Footer } from "./components/Footer";
import "./styles/custom.scss";

export const App = () => {
  return (
    <div className="page">
      <NavBar />
      <TypingText1 />
      <Description />
      <ScrollingText />
      <DevList />
      <TechStack />
      <ThanksLocation />
      <Footer />
    </div>
  );
};

export default App;
