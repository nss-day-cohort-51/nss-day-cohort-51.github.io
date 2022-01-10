//Purpose: Creates and displays the Media button component

import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { buttonColor } from "../components/helpers";
import "../styles/custom.scss";

export const MediaIcons = ({ obj }) => {
  return (
    <>
      <div className="media-btn">
        <div className={`icon linkedin ${buttonColor(obj?.title)}`}>
          <a
            href={obj?.linkedin}
            target="_blank"
            rel="noreferrer"
            title="Visit LinkedIn"
          >
            <BsLinkedin /> {/* Linkedin icon */}
          </a>
        </div>

        <div className={`icon mail ${buttonColor(obj?.title)}`}>
          <a href={"mailto:" + obj?.email} title={"Email " + obj?.name}>
            <MdEmail /> {/* Mail icon */}
          </a>
        </div>

        <div className={`icon git ${buttonColor(obj?.title)}`}>
          <a
            href={obj?.git}
            target="_blank"
            rel="noreferrer"
            title="Visit Github"
          >
            <BsGithub /> {/* Github icon */}
          </a>
        </div>
      </div>
    </>
  );
};
