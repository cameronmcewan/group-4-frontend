import React from "react";

const PortfolioExplore = (props) => {
  return (
    <h2>
      {props.token.name} ({props.token.symbol})
    </h2>
  );
};

export default PortfolioExplore;
