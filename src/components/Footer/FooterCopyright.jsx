import React from "react";
import { FacebookSvg, InstagramSvg, TwitterSvg, YoutubeSvg } from "./Icons";

const FooterCopyright = () => {
  return (
    <div className="footer__copyright container">
      <p className="footer__copyright-text">
        Made With Love By Figmaland All Right Reserved
      </p>
      <div className="footer__copyright-links">
        <a href="/#">
          <FacebookSvg />
        </a>
        <a href="/#">
          <InstagramSvg />
        </a>
        <a href="/#">
          <TwitterSvg />
        </a>
        <a href="/#">
          <YoutubeSvg />
        </a>
      </div>
    </div>
  );
};

export default FooterCopyright;
