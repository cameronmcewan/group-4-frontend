import React, { useState } from "react";
import PortfolioExplore from "../components/PortfolioExplore";
// import portfolioFactoryContract from "../contracts/PortfolioFactory";
import portfolios from "../helpers/portfolios.json";
import { Link } from "react-router-dom";
const Explore = props => {
  
  return (
    <section>
      <input type={"text"} className="search" placeholder="Search"></input>
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
