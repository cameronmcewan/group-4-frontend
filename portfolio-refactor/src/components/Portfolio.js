import React from "react";
import "./Portfolio.css";
import { buy } from "../functions/Buy";
import { sell } from "../functions/Sell";
import PortfolioHeader from "./PortfolioHeader";
import Button from "@mui/material/Button";

function PortFolio() {
  return (
    <div className="pcontainer">
      <h3 className="title">FolioCoin1</h3>
      <PortfolioHeader />
      <Button variant="contained" onClick={buy}>
        Buy
      </Button>
      <Button variant="contained" onClick={sell}>
        Sell
      </Button>
    </div>
  );
}

export default PortFolio;
