import React, { useState, useContext } from "react";
// import portfolioFactoryContract from "../contracts/PortfolioFactory";
import { UserContext } from "../helpers/UserContext";
import CreatePortfolioForm from "../components/CreatePortfolioForm";

const Create = () => {
  const { address } = useContext(UserContext);

  return (
    <>
      <section>
        <header className="block center">
          <div>
            <h1>Create a new portfolio coin</h1>
          </div>
        </header>
        <div className="row">
          <h4 className="block col-2">Your new coin:</h4>
          <h4 className="col-1">
            <CreatePortfolioForm/>
          </h4>
        </div>
      </section>
      <section>
        <h1>Another section</h1>
        <h2>Space</h2>
      </section>
    </>
  );
};

export default Create;
