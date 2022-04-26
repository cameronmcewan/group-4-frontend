import React from "react";
import Logo from "../assets/logos/folio_clean_2.svg";
import MetaMask from "./MetaMask";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar sticky">
    <ul>
      <li>
        <Link className="logo" to="/">
          <img  src={Logo} alt="The Folio Logo" />
        </Link>
      </li>
      <li>
        <Link className="tab" to="explore">Explore</Link>
      </li>
      <li>
        <Link className="tab" to="create">Create</Link>
      </li>
      <li className="right">
        <MetaMask />
      </li>
    </ul>  
</nav>
  );
}

export default Navbar;
