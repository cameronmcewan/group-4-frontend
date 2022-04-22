import React from 'react';
import Logo from "../assets/logos/folio-tnr.svg";

const Footer = () => {
  return (
      <footer>
        <a className="active row center" href="/">
          <img className="logo expandmore" src={Logo} alt="The Folio Logo" />
        </a>
      </footer>
  )
};

export default Footer;