import React from "react";
import logo from '../../assets/logo.svg';
import "./style.scss";

const Header = () => {
  return (
      <div className="Header">
          <img src={logo} alt="Logo"/>
      </div>
  );
};

export default Header;
