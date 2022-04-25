import { useState, useEffect } from "react";
import { ethers } from "ethers";
import PortfolioABI from "../contracts/PortfolioABI.json";

const PortfolioExplore = (props) => {
  const [totalSupply, setTotalSupply] = useState("");
  const portfolioContract = new ethers.Contract(
    props.token.address,
    PortfolioABI,
    ethers.providers.getDefaultProvider("kovan")
  );

  useEffect(() => {
    portfolioContract.totalSupply().then((res) => {
      setTotalSupply(res.toString());
    });
  });

  return (
    <div className="block center">
      <h2>
        {props.token.name} ({props.token.symbol})
      </h2>
      <p>Circulating Supply:</p>
      <p>{totalSupply}</p>
    </div>
  );
};

export default PortfolioExplore;
