import React from "react";
import SectionIntro from '../SectionIntro'
import AdviceList from "./AdviceList";
import { adviceIntro } from "../../../assets/db";

const Advice = () => {
  return (
    <section className="advice container">
      <SectionIntro intro={adviceIntro}/>
      <AdviceList />
    </section>
  );
};

export default Advice;
