import React, { useRef } from "react";
import PortfolioAccordion from "../components/explore/PortfolioAccordion";
import portfolios from "../helpers/portfolios.json";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const Explore = () => {
  const Explore = useRef(null);

  const goToExplore = () =>
    window.scrollTo({
      top: Explore.current.offsetTop,
      behavior: "smooth",
    });

  return (
    <>
      <section>
        <h1 className="intro gap">
          Explore PortFolios. <br /> From our experts and the community.
        </h1>
        <br></br>
        <div className="btn-scroll">
          <button className="btn hollow large" onClick={goToExplore}>
            Explore Portfolios
            <br />
            <ArrowDownwardIcon />
          </button>
        </div>
      </section>
      <section ref={Explore}>
        <br></br>
        <h1>Explore. Buy. Sell. Redeem.</h1>
        <br></br>
        <PortfolioAccordion token={portfolios.kovan.first} />
        <PortfolioAccordion token={portfolios.kovan.second} />
        <PortfolioAccordion token={portfolios.kovan.third} />
      </section>
    </>
  );
};

export default Explore;
