import React from "react";
import Logo from "../assets/logos/folio-tnr.svg";
import MetaMask from "./MetaMask";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav>
        <ul className="topnav">
          <Link to="/">
            <img className="logo" src={Logo} alt="The Folio Logo" />
          </Link>
          <li>
            <Link to="explore">Explore</Link>
          </li>
          <li>
            <Link to="create">Create</Link>
          </li>
          <li className="right">
            <MetaMask />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
