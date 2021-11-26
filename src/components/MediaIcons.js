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
        <div className="icon">
          <a href={obj?.linkedin}>
            <BsLinkedin />
          </a>
        </div>
        <div className="icon">
          <a href={obj?.git}>
            <BsGithub />
          </a>
        </div>
        <div className="icon">
          <a href={obj?.personal}>
            <BsGlobe2 />
          </a>
        </div>
        <div className="icon">
          <a href={obj?.resume}>
            <BsFillFileTextFill />
          </a>
        </div>
        <div className="icon">
          <a href={"mailto:" + obj?.email}>
            <MdEmail />
          </a>
        </div>
      </div>
    </>
  );
};
