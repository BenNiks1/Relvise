import React from "react";
import SectionIntro from '../SectionIntro'
import FeaturesList from "./FeaturesList";
import { featuresIntro } from "../../../assets/db";

const Features = () => {
  return (
    <section className="features container">
      <SectionIntro intro={featuresIntro}/>
      <FeaturesList />
    </section>
  );
};

export default Features;
