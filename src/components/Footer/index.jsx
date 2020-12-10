import React from "react";
import FooterList from "./FooterList";
import FooterAd from "./FooterAd";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="container">
          <FooterList />
        </div>
      </div>
      <FooterAd />
    </footer>
  );
};

export default Footer;
