import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.instagram.com/pablo.del.barrio/" target="_blank">
          <InstagramIcon />
        </a>
        <a href="https://twitter.com/pablo_delbarrio" target="_blank">
          <TwitterIcon />
        </a>
        <a href="https://www.linkedin.com/in/pablo-del-barrio/" target="_blank">
          <LinkedInIcon />
        </a>
      </div>
      <p> &copy; 2022 pablo.lol</p>
    </div>
  );
}

export default Footer;
