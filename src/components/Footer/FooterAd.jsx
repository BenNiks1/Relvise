import React from "react";
import { FacebookSvg, InstagramSvg, TwitterSvg, YoutubeSvg } from "./Icons";

const FooterAd = () => {
  return (
    <div className="footer-ad container">
      <p className="footer-ad__text">
        Made With Love By Figmaland All Right Reserved
      </p>
      <div className="footer-ad__social-network">
        <FacebookSvg />
        <InstagramSvg />
        <TwitterSvg />
        <YoutubeSvg />
      </div>
    </div>
  );
};

export default FooterAd;
