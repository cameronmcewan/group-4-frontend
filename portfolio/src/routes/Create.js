import React, { useState, useContext } from "react";
import CreateForm from "../components/CreateForm";
import DropDown from "../components/DropDown";
import { UserContext } from "../helpers/UserContext";
import portfolioFactoryContract from "../contracts/PortfolioFactory";

const Create = () => {
  const { address } = useContext(UserContext);
  const [name, setName] = useState("Portfolio");
  const [symbol, setSymbol] = useState("FOLO");
  const [tokenAddresses, setTokenAddresses] = useState([]);
  const [percentageHoldings, setPercentageHoldings] = useState([]);
  const [ownerFee, setOwnerFee] = useState(0);

  // Example input to create a portfolio
  // "Portfolio","FOLO", ["0xa36085F69e2889c224210F603D836748e7dC0088", "0xd0A1E359811322d97991E03f863a0C30C2cF029C"],[40, 60],100
  const createPortfolio = () => {
    console.log(
      `The variables are: ${name}, ${symbol}, ${tokenAddresses}, ${percentageHoldings}, ${ownerFee}`
    );
    portfolioFactoryContract.methods
      .create(name, symbol, tokenAddresses, percentageHoldings, ownerFee)
      .send({
        from: address,
      })
      .then((receipt) => {
        console.log(receipt);
      });
  };

  return (
    <>
      <section>
        <header className="block center">
          <div>
            <h1>Create a new portfolio coin</h1>
          </div>
        </header>
        <div className="row">
          <h4 className="block col-2">Your new coin:</h4>
          <h4 className="block col-1">
            Add crypto tokens to your coin: Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Magnam modi laudantium autem adipisci
            quibusdam provident consequatur, ab porro? Deserunt nam distinctio
            nesciunt quia quibusdam obcaecati, excepturi ea magnam enim minus.
            Dolore voluptas excepturi modi. Iste quia consequuntur maxime beatae
            est!
            <CreateForm />
            <DropDown />
          </h4>
        </div>
      </section>
      <p>{address}</p>
      {address && (
        <button className="btn btn-cta" onClick={createPortfolio}>
          Create Portfolio
        </button>
      )}
      <section>
        <h1>Another section</h1>
        <h2>Space</h2>
      </section>
    </>
  );
};

export default Create;
