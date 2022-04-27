import React, { useRef } from "react";
import PortfolioAccordion from "../components/explore/PortfolioAccordion";
import portfolios from "../helpers/portfolios.json";
import { Link } from "react-router-dom";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';


const Explore = () => {

  const Explore = useRef(null);

  const goToExplore = () => 
  window.scrollTo({
      top: Explore.current.offsetTop,
      behavior: "smooth"
  });

  return (
    <>
    <section>
      <h1 className="hovereffect">
        Easy access to ready made diversified crypto investment portfolios 
      </h1>
      <div className="btn-scroll">
        <button className="hollow large" onClick={goToExplore}>
        Explore Portfolios
        <br />
        <ArrowDownwardIcon />
        </button>
      </div>
    </section>
    <section ref={Explore}>
      <h3>
        Search for the name of an existing Portfolio or token to filter the
        results
      </h3>
      {/* <input type={"text"} className="search" placeholder="Search"></input> */}
      <PortfolioAccordion token={portfolios.kovan.first} />
      <PortfolioAccordion token={portfolios.kovan.second} />
      <PortfolioAccordion token={portfolios.kovan.third} />
    </section>
    </>
  );
};

export default Explore;
