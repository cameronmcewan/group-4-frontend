import portfolioFactoryContract from "../contracts/PortfolioFactory";
import { useContext } from "react";
import { UserContext } from "../helpers/UserContext";

function CreateButton() {
  const userContext = useContext(UserContext);

  // Example input to create a portfolio
  // "Portfolio","FOLO", ["0xa36085F69e2889c224210F603D836748e7dC0088", "0xd0A1E359811322d97991E03f863a0C30C2cF029C"],[40, 60],100
  const createPortfolio = (
    name,
    symbol,
    tokenAddresses,
    percentageHoldings,
    ownerFee
  ) => {
    console.log(
      `The variables are: ${name}, ${symbol}, ${tokenAddresses[0]}, ${percentageHoldings[0]}, ${ownerFee}`
    );
    portfolioFactoryContract.methods
      .create(name, symbol, tokenAddresses, percentageHoldings, ownerFee)
      .send({
        from: userContext.address,
      })
      .then((receipt) => {
        console.log(receipt);
      });
  };

  return (
    <button
      className="btn btn-cta"
      onClick={createPortfolio(
        "ReactPortfolio",
        "RPRT",
        [
          "0xa36085F69e2889c224210F603D836748e7dC0088",
          "0xd0A1E359811322d97991E03f863a0C30C2cF029C",
        ],
        [40, 60],
        100
      )}
    >
      Press me
    </button>
  );
}

export default CreateButton;
