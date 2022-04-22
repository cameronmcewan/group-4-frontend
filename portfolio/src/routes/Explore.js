import React, { useState } from "react";
import PortfolioExplore from "../components/PortfolioExplore";
import { Link } from 'react-router-dom';
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
      <h3>
        Search for the name of an existing Portfolio or token to filter the
        results
      </h3>
      <Link to="/detail">
        <PortfolioExplore token={portfolios.kovan.first} />
      </Link>
      <Link to="/detail">
        <PortfolioExplore token={portfolios.kovan.third} />
      </Link>
    </section>
  );
};

export default Explore;
