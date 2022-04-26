import React, { useState, useContext,  Component, useRef } from "react";
import CreatePortfolioForm from '../components/CreatePortfolioForm';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import LooksOneOutlinedIcon from '@mui/icons-material/LooksOneOutlined';
import LooksTwoOutlinedIcon from '@mui/icons-material/LooksTwoOutlined';
import Looks3OutlinedIcon from '@mui/icons-material/Looks3Outlined';
import Looks4OutlinedIcon from '@mui/icons-material/Looks4Outlined';
import Looks5OutlinedIcon from '@mui/icons-material/Looks5Outlined';
import Looks6OutlinedIcon from '@mui/icons-material/Looks6Outlined';

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
    <h1>Its Easy To Create Your Own ETF Token</h1>
    <li className="">
      <ul><h2><LooksOneOutlinedIcon className="icon" fontSize="large"/> Choose Crypto Tokens To Add To Your ETF Token</h2></ul> 
      <ul><h2><LooksTwoOutlinedIcon className="icon" fontSize="large"/> Name Your ETF Token</h2></ul>
      <ul><h2><Looks3OutlinedIcon className="icon" fontSize="large"/> Set A Fee For Your ETF Token</h2></ul>
      <ul><h2><Looks4OutlinedIcon className="icon" fontSize="large"/> Review Your Token And Deploy To The Kovan Testnet</h2></ul>
    </li>
    <div className="btn-scroll">
        <button className="btn hollow large" onClick={goToStep1}>
        Start Creating!<br/>
        <ArrowDownwardIcon />
        </button>
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
    <button className="btn-secondary" onClick={goToStep1}><h3>Back</h3></button>
    <button className="btn-primary" onClick={goToStep2}><h3>Continue</h3></button>
    </div>
    </section>

    <section ref={Step2}>
      <h2>Step 2</h2>
      <h1>Add Basic Details</h1>
      <div className="btn-scroll">
      <button className="btn-secondary" onClick={goToStep1}><h3>Back</h3></button>
      <button className="btn-primary" onClick={goToStep3}><h3>Continue</h3></button>
      </div>
    </section>

    <section ref={Step3}>
      <h2>Step 3</h2>
      <h1>Set A Fee For Your ETF Token</h1>
      <div className="btn-scroll">
      <button className="btn-secondary" onClick={goToStep2}><h3>Back</h3></button>
      <button className="btn-primary" onClick={goToFinalStep}><h3>Continue</h3></button>
      </div>
    </section>

    <section ref={FinalStep}>
      <h2>Final Step</h2>
      <h1>Review And Deploy Your New ETF Token</h1>
      <div className="btn-scroll">
      <button className="btn-secondary" onClick={goToStep3}><h3>Back</h3></button>
      <button className="btn-primary" onClick={goToFinalStep}><h3>Deploy Token</h3></button> 
      </div>    
    </section>
    </>
  )
}

export default Create
