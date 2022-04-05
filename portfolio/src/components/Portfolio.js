import React, { useContext } from "react";
import Button from "@mui/material/Button";
import contract from "../helpers/contract";
import { UserContext } from "../helpers/userContext";

function Portfolio() {
  // Get the user address from the React context
  const userAddress = useContext(UserContext);

  const buy = async () => {
    let ethAmountInWei = 10000;
    console.log(`Buying FOLO with ${ethAmountInWei} Wei`);
    contract.methods
      .buy()
      .send({
        from: userAddress,
        value: ethAmountInWei,
      })
      .then((receipt) => {
        console.log(receipt);
      });
  };

  const sell = async () => {
    // Token uses 18 decimals
    let tokensToSell = 10000;
    console.log(`Selling ${tokensToSell} FOLO`);
    contract.methods
      .sell(tokensToSell)
      .send({
        from: userAddress,
      })
      .then((receipt) => {
        console.log(receipt);
      });
  };

  return (
    <div className="pcontainer">
      <h3 className="title">FolioCoin1</h3>
      {userAddress && ( // only display buttons if user has connected to Metamask
        <div>
          <Button variant="contained" onClick={buy}>
            Buy
          </Button>
          <Button variant="contained" onClick={sell}>
            Sell
          </Button>
        </div>
      )}
    </div>
  );
}

export default Portfolio;
