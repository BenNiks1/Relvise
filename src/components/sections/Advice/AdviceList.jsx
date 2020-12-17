import React from "react";
import { adviceList } from "../../../assets/db";

const AdviceList = () => {
  return (
    <ul className="advice__list">
      {adviceList.map((item) => (
        <li className="advice__item" key={item.id}>
          <div className="advice__item-inner">
            <p className="advice__item-title">{item.title}</p>
            <p className="advice__item-text">{item.text}</p>
          </div>
          <img src={item.img} alt="item icon" className="advice__item-img" />
        </li>
      ))}
    </ul>
  );
};
export default AdviceList;
