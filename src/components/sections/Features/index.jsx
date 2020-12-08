import React from "react";
import FeaturesList from "./FeaturesList";

const Features = ({ featuresIntro }) => {
  return (
    <section className="features container">
      <div className="feature__intro-wrapper">
        {featuresIntro.map((item) => (
          <div className="features__intro">
            <h2 className="features__intro-title">{item.title}</h2>
            <p className="features__intro-text">{item.text}</p>
          </div>
        ))}
      </div>
      <FeaturesList />
    </section>
  );
};

export default Features;
