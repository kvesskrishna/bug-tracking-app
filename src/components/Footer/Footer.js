import React from "react";
import "./Footer.css";
const Footer = () => {
  const date = new Date();
  return (
    <div>
      <footer>
        <span>Developed by VESS Krishna Krovvidi</span> |
        <span> Bug Tracker - {date.getFullYear()}</span>
      </footer>
    </div>
  );
};

export default Footer;
