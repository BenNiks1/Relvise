import React from "react";

const Testimonials = (items) => {
  return (
    <ul className="testimonials">
      {items.map((item) => (
        <li>
          <p>{item.title}</p>
          <p>{item.text}</p>
        </li>
      ))}
    </ul>
  );
};
export default Testimonials;
