import React, { useState, useContext } from "react";
import portfolioFactoryContract from "../contracts/PortfolioFactory";
import { UserContext } from "../helpers/UserContext";

const CreatePortfolioForm = () => {
  const { address } = useContext(UserContext);
  const [name, setName] = useState("Portfolio");
  const [symbol, setSymbol] = useState("FOLO");
  const [tokenAddresses, setTokenAddresses] = useState([
    "0xa36085F69e2889c224210F603D836748e7dC0088",
    "0xd0A1E359811322d97991E03f863a0C30C2cF029C",
  ]);
  const [percentageHoldings, setPercentageHoldings] = useState([40, 60]);
  const [ownerFee, setOwnerFee] = useState(100);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    createPortfolio();
  };

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
    <form className="formItem" onSubmit={handleSubmit}>
    <div>
      <select name="Add token" id="input7">
        <option></option>
        <option value="BTC">BTC</option>
        <option value="ETH">ETH</option>
        <option value="BNB">BNB</option>                              
      </select>
    </div>
      <div>
        <label>
          Token Name:
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
      </div>

      <div>
        <label>
          Ticker:
          <input
            type="text"
            value={symbol}
            onChange={e => setSymbol(e.target.value)}
          /> 
        </label> 
      </div>

      <div>
        <label>
          Token Addresses:
          <input
            type="text"
            value={tokenAddresses}
            onChange={e => setTokenAddresses(e.target.value)}
          />
        </label>
      </div>

      <div>
        <label>
          Token Holdings:
          <input
            type="text"
            value={percentageHoldings}
            onChange={e => setPercentageHoldings(e.target.value)}
          />
        </label>
      </div>

      <div>
        <label>
          Owner Fee:
          <input
            type="text"
            value={ownerFee}
            onChange={e => setOwnerFee(e.target.value)}
          />
        </label>
      </div>

      {address && <input type="submit" value="Submit" />}
    </form>
  );
};

export default CreatePortfolioForm;
