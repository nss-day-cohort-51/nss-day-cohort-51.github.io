//Purpose: Creates and displays the Media button component

import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import "../styles/custom.scss";

export const MediaIcons = ({ obj }) => {
  return (
    <>
      <div className="media-btn">
        <div className="icon git">
          <a href={obj?.git} target="_blank" rel="noreferrer" title="github">
            <BsGithub /> {/* Github icon */}
          </a>
        </div>
        <div className="icon linked">
          <a
            href={obj?.linkedin}
            target="_blank"
            rel="noreferrer"
            title="linkedin"
          >
            <BsLinkedin /> {/* Linkedin icon */}
          </a>
        </div>
        <div className="icon mail">
          <a href={"mailto:" + obj?.email} title="email">
            <MdEmail /> {/* Email icon */}
          </a>
        </div>
      </div>
    </>
  );
};
