import React, { useRef } from "react";
import PortfolioAccordion from "../components/explore/PortfolioAccordion";
import portfolios from "../helpers/portfolios.json";
import { Link } from "react-router-dom";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Logo from "../assets/logos/folio_clean_2.svg";

const Welcome = () => {
  return (
    <>
    <section id="Landing">

      <div className="row">
        <img className="folio col-1" src={Logo} alt="" />
        <h1 className="intro col-2">
        Decentralised. <br /> Diversified. Crypto.
        </h1>
      </div>

      <div className="row welcome">
        <Link className="btn-welcome" to="explore">
          Explore
        </Link>
        <Link className="btn-welcome" to="create">
          Create
        </Link>
      </div>

    </section>
    </>
  );
};

export default Welcome;
