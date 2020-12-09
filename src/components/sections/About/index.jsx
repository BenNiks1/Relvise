import React from "react";
import AboutList from "./AboutList";
import { aboutIntro } from "../../../assets/db";

const About = () => {
  return (
    <section className="about container">
      <div className="section__intro">
        {aboutIntro.map((item) => (
          <React.Fragment>
            <h2 className="section__intro-title">{item.title}</h2>
            <p className="section__intro-text">{item.text}</p>
          </React.Fragment>
        ))}
      </div>
      <div className="about__inner">
        <iframe
          width="600"
          height="442"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="about__description">
          <h3 className="about__description-title">
            Most trusted in our field
          </h3>
          <p className="about__description-text">
            Most calendars are designed for teams. Slate is designed for
            freelancers who want a simple way to plan their schedule.
          </p>
          <AboutList />
        </div>
      </div>
    </section>
  );
};

export default About;
