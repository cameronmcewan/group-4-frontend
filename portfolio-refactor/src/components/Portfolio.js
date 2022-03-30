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
      <button className="button1 btn" onClick={buy}>
        Buy
      </button>
      <button className="button2 btn btn-primary" onClick={sell}>
        Sell
      </button>
    </div>
  );
}

export default PortFolio;
