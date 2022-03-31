import React from "react";
import "./Portfolio.css";
import { buy } from "../functions/Buy";
import { sell } from "../functions/Sell";
import PortfolioHeader from "./PortfolioHeader";

function PortFolio() {
  return (
    <div className="pcontainer">
      <h3 className="title">FolioCoin1</h3>
      <PortfolioHeader />
      <button onClick={buy}>Buy</button>
      <button onClick={sell}>Sell</button>
    </div>
  );
}

export default PortFolio;
