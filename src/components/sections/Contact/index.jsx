import React from "react";
import SectionIntro from '../SectionIntro'
import ContactCards from "./ContactCards";
import ContactUs from "./ContactUs";
import { contactIntro } from "../../../assets/db";

const Contact = () => {
  return (
    <section className="contact container">
      <SectionIntro intro={contactIntro}/>
      <ContactCards />
      <ContactUs />
    </section>
  );
};

export default Contact;
