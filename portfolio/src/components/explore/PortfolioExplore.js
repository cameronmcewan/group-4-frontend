import React from "react";

const PortfolioExplore = (props) => {
  return (
    <h2>
      {props.token.name} <span className="light">{props.token.symbol}</span>
    </h2>
  );
};

export default PortfolioExplore;
