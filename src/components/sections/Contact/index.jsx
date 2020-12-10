import React from "react";
import ContactCards from "./ContactCards";
import ContactUs from "./ContactUs";
import { contactIntro } from "../../../assets/db";

const Contact = () => {
  return (
    <section className="contact container">
      <div className="section__intro">
        {contactIntro.map((item) => (
          <React.Fragment>
            <h2 className="section__intro-title">{item.title}</h2>
            <p className="section__intro-text">{item.text}</p>
          </React.Fragment>
        ))}
      </div>
      <ContactCards />
      <ContactUs />
    </section>
  );
};

export default Contact;
