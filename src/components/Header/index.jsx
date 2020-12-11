import React from "react";
import logo from "../../assets/img/logo.png";
import { MenuSvg, SearchSvg, ShopSvg } from "./icons";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="header__logo" />
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__list-item">
            <a href="/#">Home</a>
          </li>
          <li className="header__list-item">
            <a href="/#">Product</a>
          </li>
          <li className="header__list-item">
            <a href="/#">Pricing</a>
          </li>
          <li className="header__list-item">
            <a href="/#">Contact</a>
          </li>
        </ul>
      </nav>
      <SearchSvg className="header__search" />
      <ShopSvg className="header__shop" />
      <MenuSvg className="header__menu" />
    </header>
  );
};

export default Header;
