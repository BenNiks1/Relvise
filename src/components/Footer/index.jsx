import React from "react";
import FooterList from "./FooterList";
import FooterCopyright from './FooterCopyright'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="container">
          <FooterList />
        </div>
      </div>
      <FooterCopyright/>
    </footer>
  );
};

export default Footer;
