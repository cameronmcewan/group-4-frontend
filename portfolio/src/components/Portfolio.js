import React, { useContext } from "react";
import Button from "@mui/material/Button";
// import contract from "../helpers/contract";
import { UserContext } from "../helpers/UserContext";

function Portfolio() {
  // Get the user address from the React context
  const userAddress = useContext(UserContext);

  const buy = async () => {
    let ethAmountInWei = 10000;
    console.log(`Buying FOLO with ${ethAmountInWei} Wei`);
    // contract.methods
    //   .buy()
    //   .send({
    //     from: userAddress,
    //     value: ethAmountInWei,
    //   })
    //   .then((receipt) => {
    //     console.log(receipt);
    //   });
  };

  const sell = async () => {
    // Token uses 18 decimals
    let tokensToSell = 10000;
    console.log(`Selling ${tokensToSell} FOLO`);
    // contract.methods
    //   .sell(tokensToSell)
    //   .send({
    //     from: userAddress,
    //   })
    //   .then((receipt) => {
    //     console.log(receipt);
    //   });
  };

  return (
    <div className="pcontainer">
      <h3 className="title">FolioCoin1</h3>
      {userAddress && ( // only display buttons if user has connected to MetaMask
        <div>
          <Button className="btn" onClick={buy}>
            Buy
          </Button>
          <button className="btn btn-primary" onClick={sell}>
            Sell
          </button>
        </div>
      )}
    </div>
  );
}

export default Portfolio;
