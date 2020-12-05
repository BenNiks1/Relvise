import React from "react";
import Testimonials from "./Testimonials";

const Intro = () => {
  return (
    <section className="intro">
      <div className="intro__inner container">
        <h1 className="intro__inner-title">Finance and Consultancy Solution</h1>
        <p className="intro__inner-subtitle">
          We know how large objects will act, but things on a small scale.
        </p>
        <div className="intro__inner-buttons">
          <button className="intro__quote">Get Quote Now</button>
          <button className="intro__more">Learn More</button>
        </div>
        <Testimonials
          items={[
            {
              title: "Surface Transport & Logistics",
              text: "We focus on ergonomics and meeting you where you work. ",
            },
          ]}
        />
      </div>
    </section>
  );
};

export default Intro;
