import React from "react";
import "./PortfolioHeader.css";
import Logo from "./../assets/Folio_logo_no-bg.png";

function PortfolioHeader() {
  return (
    <div>
      <img src={Logo} alt="FolioLogo" />
    </div>
  );
}

export default PortfolioHeader;
