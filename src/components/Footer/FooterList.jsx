import React from "react";
import { footerList } from "../../assets/db";
import { PhoneSvg, AddressSvg, EmailSvg } from "./Icons";

const FooterList = () => {
  return (
    <ul className="footer__list">
      {footerList.map((item) => (
        <li className="footer__item">
          <p className="footer__item-title">{item.title}</p>
          <a href="/#" className="footer__item-link">
            {item.link1 ? (
              item.link1
            ) : (
              <div className="footer__item-wrapper">
                <PhoneSvg className="footer__item-icon" />
                <a href="/#" className="footer__item-link">
                  {item.phone}
                </a>
              </div>
            )}
          </a>
          <a href="/#" className="footer__item-link">
            {item.link2 ? (
              item.link2
            ) : (
              <div className="footer__item-wrapper">
                <AddressSvg className="footer__item-icon" />
                <a href="/#" className="footer__item-link">
                  {item.address}
                </a>
              </div>
            )}
          </a>
          <a href="/#" className="footer__item-link">
            {item.link3 ? (
              item.link3
            ) : (
              <div className="footer__item-wrapper">
                <EmailSvg className="footer__item-icon" />
                <a href="/#" className="footer__item-link">
                  {item.email}
                </a>
              </div>
            )}
          </a>
          <a href="/#" className="footer__item-link">
            {item.link4}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default FooterList;
