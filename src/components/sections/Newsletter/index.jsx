import React from "react";

const Newsletter = () => {
  return (
    <section className="newsletter container">
      <div className="newsletter__inner">
        <p className="newsletter__inner-text">
          Subscribe For Latest Newsletter
        </p>
        <form className="newsletter__form">
          <input type="text" placeholder="Your Email" />
          <button>Subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter