import React, { useState, useContext,  Component, useRef } from "react";
import CreatePortfolioForm from '../components/CreatePortfolioForm';
const Create = () => {

    const Begin = useRef(null);
    const Step1 = useRef(null);
    const Step2 = useRef(null);
    const Step3 = useRef(null);
    const FinalStep = useRef(null);

    const goToBegin = () => 
    window.scrollTo({
        top: Begin.current.offsetTop,
        behavior: "smooth"
    });

    const goToStep1 = () => 
        window.scrollTo({
            top: Step1.current.offsetTop,
            behavior: "smooth"
        });

    const goToStep2 = () => 
        window.scrollTo({
            top: Step2.current.offsetTop,
            behavior: "smooth"
        });

    const goToStep3 = () => 
        window.scrollTo({
            top: Step3.current.offsetTop,
            behavior: "smooth"
        });

    const goToFinalStep = () => 
        window.scrollTo({
            top: FinalStep.current.offsetTop,
            behavior: "smooth"
        });


  return (
    <>
    <section ref={Begin}>
    <h1>Create Your Own ETF Token</h1>
    <li className="block">
      <ul><h2>1. Choose Crypto Tokens To Add To Your ETF Token</h2></ul>
      <ul><h2>2. Name Your ETF Token</h2></ul>
      <ul><h2>3. Set A Fee For Your ETF Token</h2></ul>
      <ul><h2>4. Review Your Token And Deploy To The Kovan Testnet</h2></ul>
    </li>
    <div className="btn-scroll">
        <button className="btn btn-cta" onClick={goToStep1}>Begin</button>
    </div>
    </section>

    <section ref={Step1}>
    {/* <div className={this.state.show == 1 ? 'alertW' : 'creatW not'}><Form></Form></div> */}
    <h2>Step 1</h2>
    <h1>Add Crypto Tokens To Your ETF Token</h1>
    <div className="row">
      <h4 className="block col-2">Your new coin:
      </h4>
      <h4 className="block col-1">
      </h4>
    </div>
    <div className="btn-scroll">
        <button className="btn btn-cta" onClick={goToStep1}>Back</button>
        <button className="btn btn-cta" onClick={goToStep2}>Continue</button>
    </div>
    </section>

    <section ref={Step2}>
      <h2>Step 2</h2>
      <h1>Add Basic Details</h1>
      <div className="btn-scroll">
        <button className="btn btn-cta" onClick={goToStep1}>Back</button>
        <button className="btn btn-cta" onClick={goToStep3}>Continue</button>
      </div>
    </section>

    <section ref={Step3}>
      <h2>Step 3</h2>
      <h1>Set A Fee For Your ETF Token</h1>
      <div className="btn-scroll">
        <button className="btn btn-cta" onClick={goToStep2}>Back</button>
        <button className="btn btn-cta" onClick={goToFinalStep}>Continue</button>
      </div>
    </section>

    <section ref={FinalStep}>
      <h2>Final Step</h2>
      <h1>Review And Deploy Your New ETF Token</h1>
      <div className="btn-scroll">
        <button className="btn btn-cta" onClick={goToStep3}>Back</button>
        <button className="btn btn-cta" onClick={goToFinalStep}>Deploy Token</button>
      </div>    
    </section>
    </>
  )
}

export default Create
