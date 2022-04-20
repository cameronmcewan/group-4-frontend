const PortfolioCard = (props) => {
  const tokenAddresses = {
    "0xd0A1E359811322d97991E03f863a0C30C2cF029C": "WETH",
    "0xA0A5aD2296b38Bd3e3Eb59AAEAF1589E8d9a29A9": "WBTC",
    "0x4F96Fe3b7A6Cf9725f59d353F723c1bDb64CA6Aa": "DAI",
    "0xa36085F69e2889c224210F603D836748e7dC0088": "LINK",
  };
  // Props are of JSON form:
  // "address": "0x7FB165B3A4937DDe9AEa269B4F66A5D04772Eb9D",
  // "name": "Portfolio",
  // "symbol": "FOLO",
  // "tokenAddresses": [
  //     "0xa36085F69e2889c224210F603D836748e7dC0088",
  //     "0xd0A1E359811322d97991E03f863a0C30C2cF029C"
  // ],
  // "percentageHoldings": [
  //     40,
  //     60
  // ],
  // "ownerFee": 100
  return (
    <div className="block center">
      <h2>
        {props.token.name} ({props.token.symbol})
      </h2>
      {/* Include a pie chart or some other graphic of the contents of the portfolio */}
      <p>
        {tokenAddresses[props.token.tokenAddresses[0]]},{" "}
        {props.token.percentageHoldings[0]}
      </p>
      <p>
        {tokenAddresses[props.token.tokenAddresses[1]]},{" "}
        {props.token.percentageHoldings[1]}
      </p>
    </div>
  );
};

export default PortfolioCard;
