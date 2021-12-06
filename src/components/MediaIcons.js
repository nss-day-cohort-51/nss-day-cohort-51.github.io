//Purpose: Creates and displays the Media button component

import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import "../styles/custom.scss";

export const MediaIcons = ({ obj }) => {
  return (
    <>
      <div className="media-btn">
        <div className="icon linkedin">
          <a
            href={obj?.linkedin}
            target="_blank"
            rel="noreferrer"
            title="Visit LinkedIn"
            // style={{ color: iconColor }}
          >
            <BsLinkedin /> {/* Linkedin icon */}
          </a>
        </div>
        <div className="icon git">
          <a
            href={obj?.git}
            target="_blank"
            rel="noreferrer"
            title="Visit Github"
            // style={{ color: iconColor }}
          >
            <BsGithub />
          </a>
        </div>

        <div className="icon mail">
          <a
            href={"mailto:" + obj?.email}
            title={"Email " + obj?.name}
            // style={{ color: iconColor }}
          >
            <MdEmail />
          </a>
        </div>
      </div>
    </>
  );
};
