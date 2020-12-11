import React from "react";
import { aboutList } from "../../../assets/db";

const AboutList = () => {
  return (
    <ul className="about__list">
      {aboutList.map((item) => (
        <li className="list__item" key={item.id}>
          <i className="list__item-icon">{item.icon}</i>
          <div className="list__item-wrapper">
            <p className="list__item-title">{item.title}</p>
            <p className="list__item-text">{item.text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};
export default AboutList;
