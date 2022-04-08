import React from "react";
import Logo from "./../assets/logo-light-no-bg.png";

function Header() {
  return (
    <div className="header">
      <div className="column"></div>
      <div className="column">
        <a href="/">
          <img className="logo" src={Logo} alt="FolioLogo" />
        </a>
      </div>
      <div className="column"></div>
    </div>
  );
}

export default Header;