import React from 'react';
import Logo from "../assets/logos/folio-tnr.svg";
import PieLogo from "../assets/logos/pie-chart-logo.svg"
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer>
    <ul>
    <li>
      <Link className="logo" to="/">
        <img className='logo' src={PieLogo} alt="The Folio Logo" />
      </Link>
    </li>
    {/* <li>
    <h4>This is the footer</h4>
    </li> */}

    </ul>
    </footer>
  )
};

export default Footer;