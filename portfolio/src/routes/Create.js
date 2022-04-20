import React, { useState, useContext,Component } from "react";
// import portfolioFactoryContract from "../contracts/PortfolioFactory";
import { UserContext } from "../helpers/UserContext";
import CreatePortfolioForm from "../components/CreatePortfolioForm";
import CreatePortfolioForm2 from "../components/CreatePortfolioForm2";
import Form from "../components/form/Form";
import "./create.css";

class Create extends Component
{
  constructor(props) {
    super(props);
    let url = window.location.href;
    let arr = url.split('?');
    let type = '';
    this.show = 1;
    if(arr.length > 1){
      this.show = 0;
      type = arr[1];
    }
  }
  render(){
    return(
      <>
      <section>
        <div className={this.show==1?'alertW':'creatW not'}><Form></Form></div>
        <header className="block center">
          <div>
            <h1>Create a new portfolio coin</h1>
          </div>
        </header>
        <div className="row">
          <h4 className="block col-2">Your new coin:
            <CreatePortfolioForm2/>
          </h4>
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
    )
  }
}

export default Create;
