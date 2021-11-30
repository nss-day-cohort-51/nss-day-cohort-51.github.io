//Purpose: Creates and displays the Media button component

import React from "react";
import {
  BsLinkedin,
  BsGithub,
  BsGlobe2,
  BsFillFileTextFill,
} from "react-icons/bs";
import { MdEmail } from "react-icons/md";

import "../styles/custom.scss";

export const MediaIcons = ({ obj }) => {
  return (
    <>
      <div className="media-btn">
        <div className="icon git">
          <a href={obj?.git} target="_blank" rel="noreferrer">
            <BsGithub />
          </a>
        </div>
        <div className="icon linked">
          <a href={obj?.linkedin} target="_blank" rel="noreferrer">
            <BsLinkedin />
          </a>
        </div>
        <div className="icon resume">
          <a href={obj?.resume} target="_blank" rel="noreferrer">
            <BsFillFileTextFill />
          </a>
        </div>
        <div className="icon web">
          <a href={obj?.personal} target="_blank" rel="noreferrer">
            <BsGlobe2 />
          </a>
        </div>
        <div className="icon mail">
          <a href={"mailto:" + obj?.email}>
            <MdEmail />
          </a>
        </div>
      </div>
    </>
  );
};
