import React from "react";

const SectionIntro = ({ intro }) => {
  return (
    <div className="section__intro">
      {intro.map((item) => (
        <React.Fragment>
          <h2 className="section__intro-title">{item.title}</h2>
          <p className="section__intro-text">{item.text}</p>
        </React.Fragment>
      ))}
    </div>
  );
};

export default SectionIntro;
