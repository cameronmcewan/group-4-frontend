import React, { useState } from "react";
import PortfolioCard from "../components/PortfolioCard";
import portfolioFactoryContract from "../contracts/PortfolioFactory";

const Explore = () => {
  const [portfolioAddresses, setPortfolioAddresses] = useState("");

  const getPortfolioAddressesFromContract = async function () {
    // Get the first portfolio address from the portfolio factory
    const address = await portfolioFactoryContract.portfolios(0);
    setPortfolioAddresses(address);
  };

  return (
    <section>
      <h3>
        Search for the name of an existing Portfolio or token to filter the
        results
      </h3>
      <button onClick={getPortfolioAddressesFromContract}>
        Get Portfolios
      </button>
      <p>{portfolioAddresses}</p>
      <PortfolioCard />
      <PortfolioCard />
      <PortfolioCard />
      <PortfolioCard />
    </section>
  );
};

export default Explore;
