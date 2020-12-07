import React from "react";

const FeaturesList = ({ featuresItem }) => {
  return (
    <ul className="features__list">
      {featuresItem.map((item) => (
        <li className="features__item">
          <i className="features__item-icon">{item.icon}</i>
          <span className="features__item-numbers">{item.numbers}</span>
          <p className="features__item-text">{item.text}</p>
        </li>
      ))}
    </ul>
  );
};

export default FeaturesList;
