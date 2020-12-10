import React from "react";
import { contactCards } from "../../../assets/db";

const ContactCards = () => {
  return (
    <ul className="contact__cards">
      {contactCards.map((item) => (
        <li className="contact__cards-item">
          <div className="wrapper">
            <i>{item.icon}</i>
            <a href={item.firstContact} className="first-link">
              {item.firstContact}
            </a>
            <a href={item.secondContact} className="second-link">
              {item.secondContact}
            </a>
            <p>{item.text}</p>
            <button>{item.btn}</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ContactCards;
