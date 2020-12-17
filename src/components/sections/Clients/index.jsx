import React from "react";
import { clients } from "../../../assets/db";

const Clients = () => {
  return (
    <section className="clients container">
      <ul className="clients__list">
        {clients.map((item) => (
          <li className="clients__list-item" key={item.id}>
            {item.icon}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Clients;
