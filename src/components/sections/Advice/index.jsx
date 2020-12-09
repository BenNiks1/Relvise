import React from "react";
import AdviceList from "./AdviceList";
import { adviceIntro } from "../../../assets/db";

const Advice = () => {
  return (
    <section className="advice container">
      <div className="section__intro">
        {adviceIntro.map((item) => (
          <React.Fragment>
            <h2 className="section__intro-title">{item.title}</h2>
            <p className="section__intro-text">{item.text}</p>
          </React.Fragment>
        ))}
      </div>
      <AdviceList />
    </section>
  );
};

export default Advice;
