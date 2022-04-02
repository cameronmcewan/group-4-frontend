import React from "react";
import "./Portfolio.css";
import { sell } from "../functions/Sell";
import PortfolioHeader from "./PortfolioHeader";
import Button from "@mui/material/Button";
import contract from "../contract.js";
import wallet from "../wallet";

function PortFolio() {
  const buy = async () => {
    let ethAmountInWei = 10000;
    console.log(`Buying FOLO with ${ethAmountInWei} Wei`);
    contract.methods
      .buy()
      .send({
        from: wallet.address,
        value: ethAmountInWei,
      })
      .then((receipt) => {
        console.log(receipt);
      });
  };

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
