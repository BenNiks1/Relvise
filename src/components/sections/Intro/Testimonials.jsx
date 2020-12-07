import React from "react";

const Testimonials = ({ items }) => {
  return (
    <ul className="testimonials">
      {items.map((item) => (
        <li className="testimonials__item">
          <i className="testimonials__item-icon">{item.icon}</i>
          <h2 className="testimonials__item-title">{item.title}</h2>
          <p className="testimonials__item-text">{item.text}</p>
        </li>
      ))}
    </ul>
  );
};
export default Testimonials;
