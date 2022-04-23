import { useState, useEffect } from "react";
import { ethers } from "ethers";
import Portfolio from "../../contracts/Portfolio.json";

const PortfolioExplore = (props) => {
  const [totalSupply, setTotalSupply] = useState("");
  const portfolioContract = new ethers.Contract(
    props.token.address,
    Portfolio.abi,
    ethers.providers.getDefaultProvider("kovan")
  );

  useEffect(() => {
    portfolioContract.totalSupply().then((res) => {
      setTotalSupply(res.toString());
    });
  });

  return (
    <>
      <h2>
        {props.token.name} ({props.token.symbol})
      </h2>
      <p>Circulating Supply:</p>
      <p>{totalSupply}</p>
    </>
  );
};

export default PortfolioExplore;
