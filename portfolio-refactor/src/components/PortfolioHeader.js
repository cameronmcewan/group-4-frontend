import React from "react";
import "./PortfolioHeader.css";
import FolioLogo from "./../assets/FolioLogo.png";

function PortfolioHeader() {
  return (
    <div>
      <div className="container header__container">
        <h5>This is your</h5>
        <h1>PortFolio</h1>
        <h5 className="text-light">
          Create and buy a Folio token represented by any combination of crypto
          assets
        </h5>
      </div>
      <img src={FolioLogo} alt="FolioLogo" />
    </div>
  );
}

export default PortfolioHeader;
