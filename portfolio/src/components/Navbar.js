import React from "react";
import Logo from "../assets/logos/folio-tnr.svg";
import Metamask from "./MetaMask";

function Navbar() {

  return (
    <div>
      <ul className="topnav">
        <a className="active" href="/">
          <img className="logo" src={Logo} alt="The Folio Logo" />
        </a>
        <li>
          <a href="explore">Explore</a>
        </li>
        <li>
          <a href="create">Create</a>
        </li>
        <li className="right">
          <Metamask />
        </li>
      </ul>
    </div>
  );
}

export default Navbar;