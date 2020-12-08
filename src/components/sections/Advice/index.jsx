import React from "react";
import AdviceList from './AdviceList'


const Advice = ({ adviceIntro }) => {
  return (
    <section className="advice container">
      <div className="advice__intro-wrapper">
        {adviceIntro.map((item) => (
          <div className="advice__intro">
            <h2 className="advice__intro-title">{item.title}</h2>
            <p className="advice__intro-text">{item.text}</p>
          </div>
        ))}
      </div>
      <AdviceList/>
    </section>
  );
};

export default Advice
