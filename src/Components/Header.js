import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header-container">
      <img src="logo.png" className="logo" />
      <input className="search-bar" type="text" />
    </div>
  );
};

export default Header;
