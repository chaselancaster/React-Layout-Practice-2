import React from "react";

import "./Header.css";
import NavBar from "../NavBar/NavBar";

const Header = () => {
  return (
    <div className="header">
      <div className="header-text">
        <h1>Flexbox by example</h1>
        <p>Everything you need to know to learn flexbox.</p>
      </div>
      <NavBar />
    </div>
  );
};

export default Header;
