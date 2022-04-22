import React, { useState } from "react";
import PortfolioCard from "../components/PortfolioCard";
// import portfolioFactoryContract from "../contracts/PortfolioFactory";
import portfolios from "../helpers/portfolios.json";
import { Link } from "react-router-dom";

const Explore = (props) => {
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
      <input type={"text"} className="search" placeholder="Search"></input>
      <h3>
        Search for the name of an existing Portfolio or token to filter the
        results
      </h3>
      {/* <button className="btn btn-cta" onClick={getTopPortfolios(3)}>
        Load top portfolios
      </button> */}
      <Link to="/detail">
        <PortfolioCard token={portfolios.kovan.first} />
      </Link>
      <Link to="/detail">
        <PortfolioCard token={portfolios.kovan.third} />
      </Link>
    </section>
  );
};

export default Explore;
