//Purpose: Creates and displays the Footer component

import React from "react";
import "../styles/custom.scss";
import NSSlogo from "../images/NSSlogo.png";
import {
  BsLinkedin,
  BsGlobe2,
  BsFacebook,
  BsTwitter

} from "react-icons/bs";



export const Footer = () => {
  return (
    <>


    
      <div id="footer" className="footer">
      <div className="NSS__logo"><img className="NSSlogo__img" src={NSSlogo} alt="C51" />
      <div className="footer-media__icons">
        <div className="icon">
          <a href="https://www.linkedin.com/school/nashville-software-school/mycompany/" target="_blank" rel="noreferrer">
            <BsLinkedin />
          </a>
        </div>
        <div className="icon">
          <a href="https://www.facebook.com/NashvilleSoftwareSchool/" target="_blank" rel="noreferrer">
            <BsFacebook />
          </a>
        </div>
        <div className="icon">
          <a href="https://nashvillesoftwareschool.com/" target="_blank" rel="noreferrer">
            <BsGlobe2 />
          </a>
        </div>
        <div className="icon">
          <a href="https://twitter.com/NashSoftware" target="_blank" rel="noreferrer">
            <BsTwitter />
          </a>
        </div>
      </div>
      </div>
      </div>
    </>
  );
};
