import React from "react";
import FeaturesList from "./FeaturesList";
import { featuresIntro } from "../../../assets/db";

const Features = () => {
  return (
    <section className="features container">
      <div className="section__intro">
        {featuresIntro.map((item) => (
          <React.Fragment>
            <h2 className="section__intro-title">{item.title}</h2>
            <p className="section__intro-text">{item.text}</p>
          </React.Fragment>
        ))}
      </div>
      <FeaturesList />
    </section>
  );
};

export default Features;
