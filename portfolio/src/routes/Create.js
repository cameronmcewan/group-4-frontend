import React, { useState, useContext } from "react";
// import portfolioFactoryContract from "../contracts/PortfolioFactory";
import { UserContext } from "../helpers/UserContext";
import CreatePortfolioForm from "../components/CreatePortfolioForm";

const Create = () => {
  const { address } = useContext(UserContext);

  return (
    <>
      <section className="block center">
        <h1>Create a new portfolio coin</h1>
        <div className="row">
            <CreatePortfolioForm/>
        </div>
      </section>

    </>
  );
};

export default Create;
