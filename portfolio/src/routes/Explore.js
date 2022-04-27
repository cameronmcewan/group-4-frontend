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
      <h1 className="intro gap">
        Browse Crypto Index Tokens. <br /> Made by our experts or our expert community.
      </h1>
      <div className="btn-scroll">
        <button className="btn hollow large" onClick={goToExplore}>
        Explore Portfolios
        <br />
        <ArrowDownwardIcon />
        </button>
      </div>
    </section>
    <section ref={Explore}>
    <h1>Browse existing PortFolios</h1>
    <h2>Connect to your Metamask wallet and click any PortFolio bar to view more details about it. You can also buy, sell and redeem PortFolio tokens from here.</h2>
      {/* <input type={"text"} className="search" placeholder="Search"></input> */}
      <PortfolioAccordion token={portfolios.kovan.first} />
      <PortfolioAccordion token={portfolios.kovan.second} />
      <PortfolioAccordion token={portfolios.kovan.third} />
    </section>
    </>
  );
};

export default Explore;
