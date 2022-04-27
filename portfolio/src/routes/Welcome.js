import React, { useRef } from "react";
import PortfolioAccordion from "../components/explore/PortfolioAccordion";
import portfolios from "../helpers/portfolios.json";
import { Link } from "react-router-dom";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Welcome = () => {


  return (
    <section id="Landing">
      <h1 className="intro">
         Index-As-A-Token. Decentralized. Diversified. Crypto.
      </h1>
      <div className="row welcome">
        <Link className="btn-welcome hollow" to="explore">
          Explore Existing PortFolios
        </Link>  

        <Link className="btn-welcome hollow" to="create">
          Create Your Own PortFolio
        </Link>
      </div>
  
    </section>
  );
};

export default Welcome;
