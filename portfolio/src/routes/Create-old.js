import React, { useState, useContext,  Component, useRef } from "react";
// import portfolioFactoryContract from "../contracts/PortfolioFactory";
import { UserContext } from "../helpers/UserContext";
import CreatePortfolioForm from "../components/CreatePortfolioForm";
import CreatePortfolioForm2 from "../components/CreatePortfolioForm2";
import Form from "../components/form/Form";
import "./create.css";


class Create extends Component { 
  constructor(props) {
    super(props);
    let url = window.location.href;
    let arr = url.split('?');
    let type = '';
    this.state = {
      show:0
    };
    // if(arr.length > 1){
    //   this.show = 0;
    //   type = arr[1];
    // }
    this.openAlert = this.openAlert.bind(this);
  
    const inputEl = useRef(null);
    const onButtonClick = () => {
      inputEl.current.focus();
    };
  }
  // openAlert(){
  //   this.setState({
  //     show:1
  //   })
  //   }


  render(){
    return(
        <>
        <section>
        {/* <div className={this.state.show == 1 ? 'alertW' : 'creatW not'}><Form></Form></div> */}
        <h2>Step 1</h2>
        <h1>Add Crypto Tokens To Your ETF Token</h1>
        <div className="row">
          <h4 className="block col-2">Your new coin:
            <CreatePortfolioForm2 />
          </h4>
          <h4 className="block col-1">
            <CreatePortfolioForm />
          </h4>
        </div>
        <div className="openmine" onClick={this.openAlert.bind(this)}>Mint your coin</div>
        </section>

        <section>
          <h2>Step 2</h2>
          <h1>Add Basic Details</h1>
          <input ref={inputEl} type="text" />
          {/* <button onClick={onButtonClick}>Focus the input</button> */}
          <button className="block btn btn-primary" onClick={onButtonClick}>
            Continue
          </button>
        </section>

        <section ref={Step3}>
          <h2>Step 3</h2>
          <h1>Set A Fee For Your ETF Token</h1>
        </section>
        <section>
          <h2>Final Step</h2>
          <h1>Review And Deploy Your New ETF Token</h1>
        </section>
        </>
    );
  };
}

export default Create