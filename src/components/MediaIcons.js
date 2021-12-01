//Purpose: Creates and displays the Media button component

import React, { useState, useEffect } from "react";
import {
  BsLinkedin,
  BsGithub,
  BsGlobe2,
  BsFillFileTextFill,
} from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import "../styles/custom.scss";

export const MediaIcons = ({ obj }) => {
  const [iconColor, setIconColor] = useState("");
  const setColor = (title) => {
    console.log("setColor invoked and title is ", title);
    if (title === "FULL STACK DEVELOPER") {
      setIconColor("#dfb775");
    } else {
      setIconColor("#82bad9");
    }
  };

  useEffect(() => {
    setColor(obj.title);
  }, []);

  return (
    <>
      <div className="media-btn">
        <div className="icon git">
          <a
            href={obj?.git}
            target="_blank"
            rel="noreferrer"
            style={{ color: iconColor }}
          >
            <BsGithub />
          </a>
        </div>
        <div className="icon linked">
          <a
            href={obj?.linkedin}
            target="_blank"
            rel="noreferrer"
            style={{ color: iconColor }}
          >
            <BsLinkedin />
          </a>
        </div>
        <div className="icon resume">
          <a
            href={obj?.resume}
            target="_blank"
            rel="noreferrer"
            style={{ color: iconColor }}
          >
            <BsFillFileTextFill />
          </a>
        </div>
        <div className="icon web">
          <a
            href={obj?.personal}
            target="_blank"
            rel="noreferrer"
            style={{ color: iconColor }}
          >
            <BsGlobe2 />
          </a>
        </div>
        <div className="icon mail">
          <a href={"mailto:" + obj?.email} style={{ color: iconColor }}>
            <MdEmail />
          </a>
        </div>
      </div>
    </>
  );
};
