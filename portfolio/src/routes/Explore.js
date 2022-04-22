import React from "react";
import PortfolioAccordion from "../components/explore/PortfolioAccordion";
import portfolios from "../helpers/portfolios.json";
import { Link } from "react-router-dom";

const Explore = () => {
  return (
    <section>
      {/* <h3>
        Search for the name of an existing Portfolio or token to filter the
        results
      </h3>
      <input type={"text"} className="search" placeholder="Search"></input> */}
      <PortfolioAccordion token={portfolios.kovan.first} />
      <PortfolioAccordion token={portfolios.kovan.second} />
      <PortfolioAccordion token={portfolios.kovan.third} />
    </section>
  );
};

export default Explore;
