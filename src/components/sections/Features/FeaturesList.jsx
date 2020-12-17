import React from "react";
import {featuresList} from "../../../assets/db";

const FeaturesList = () => {
  return (
    <ul className="features__list">
      {featuresList.map((item) => (
        <li className="features__item" key={item.id}>
          <i className="features__item-icon">{item.icon}</i>
          <span className="features__item-numbers">{item.numbers}</span>
          <p className="features__item-text">{item.text}</p>
        </li>
      ))}
    </ul>
  );
};

export default FeaturesList;
