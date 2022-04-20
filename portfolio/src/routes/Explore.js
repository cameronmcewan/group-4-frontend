import React, { useState } from "react";
import PortfolioCard from "../components/PortfolioCard";
// import portfolioFactoryContract from "../contracts/PortfolioFactory";
import portfolios from "../helpers/portfolios.json";

const Explore = () => {
  // const [portfolioAddresses, setPortfolioAddresses] = useState([]);
  // const getTopPortfolios = async function (numPortfolios) {
  //   const addresses = [];
  //   for (let i = 0; i < numPortfolios; i++) {
  //     addresses[i] = await portfolioFactoryContract.portfolios(i);
  //   }
  //   setPortfolioAddresses(addresses);
  // };

  return (
    <section>
      {/* <h3>
        Search for the name of an existing Portfolio or token to filter the
        results
      </h3>
      {/* <button className="btn btn-cta" onClick={getTopPortfolios(5)}>
        Load top portfolios
      </button> */}
      <PortfolioCard token={portfolios.kovan.first} />
    </section>
  );
};

export default Explore;
