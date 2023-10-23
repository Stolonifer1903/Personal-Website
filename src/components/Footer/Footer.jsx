import React from "react";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      Copyright © {year} Shrey Yadav. All right received.
    </footer>
  );
};

export default Footer;
