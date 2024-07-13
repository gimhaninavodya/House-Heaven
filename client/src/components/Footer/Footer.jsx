import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import "./Footer.css";

const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* Left side */}
        <div className="flexColStart f-left">
          <img src="./logo.png" alt="logo" width={120} />
          <span className="secondaryText">
          "To revolutionize property transactions with a seamless, <br/>
          transparent platform that connects buyers and sellers globally."
          </span>
          <div className="f-socials">
            <FaFacebookF className="f-icon" />
            <FaTwitter className="f-icon" />
            <FaInstagram className="f-icon" />
            <FaLinkedinIn className="f-icon" />
          </div>
        </div>

        {/* Right side */}
        <div className="flexColStart f-right">
          <span className="primaryText">Meet us</span>
          <span className="secondaryText">1234 liy Street, Springfield, IL 62704, USA</span>
          <div className="flexCenter f-menu">
            <span><a href="/properties">Property</a></span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
          <span className="secondaryText">© 2024 All rights reserved</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
