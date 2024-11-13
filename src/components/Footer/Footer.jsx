import React from "react";
import "./Footer.css";
import { SocialIcon } from "react-social-icons";
import "react-social-icons/instagram";
import "react-social-icons/linkedin";
import "react-social-icons/github";

const Footer = () => {
  return (
    <div>
      <div className="footer container-fluid">
        <div className="creation">
          <img
            src=""
            alt=""
            className="emoji"
          />{" "}
          Created by Athar Siddiqui
        </div>
        <div className="icons">
          <SocialIcon
            url="https://www.linkedin.com/in/athar-siddiqui-b584a7227/"
            style={{ height: "40px" }}
            target="blank"
          ></SocialIcon>
          <SocialIcon
            url="https://athar210221gmailcom.itch.io/"
            style={{ height: "40px" }}
             target="blank1"
          ></SocialIcon>
          <SocialIcon
            url="https://x.com/AtharSiddi96765?t=60O4S3ieTU-ks3mkWwlktQ&s=08"
            style={{ height: "40px" }}
             target="blank2"
          ></SocialIcon>
             <SocialIcon
            url="https://github.com/Atharsidd21"
            style={{ height: "40px" }}
             target="blank3"
          ></SocialIcon>
        </div>
      </div>
    </div>
  );
};

export default Footer;
