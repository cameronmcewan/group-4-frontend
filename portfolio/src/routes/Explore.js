import React from "react";
import PortfolioAccordion from "../components/explore/PortfolioAccordion";
import portfolios from "../helpers/portfolios.json";

const Explore = () => {
  const [portfolioAddresses, setPortfolioAddresses] = useState([]);

  const getTopPortfolios = async function (numPortfolios) {
    const addresses = [];
    for (let i = 0; i < numPortfolios; i++) {
      addresses[i] = await portfolioFactoryContract.portfolios(i);
    }
    setPortfolioAddresses(addresses);
  };

  return (
    <section>
      {/* <h3>
        Search for the name of an existing Portfolio or token to filter the
        results
      </h3>
      <button className="btn btn-cta" onClick={getTopPortfolios(5)}>
        Load top portfolios
      </button>
      <PortfolioCard address={portfolioAddresses[0]} />
      <PortfolioCard address={portfolioAddresses[1]} />
      <PortfolioCard address={portfolioAddresses[2]} />
      <PortfolioCard address={portfolioAddresses[3]} />
      <PortfolioCard address={portfolioAddresses[4]} />
    </section>
  );
};

export default Explore;
