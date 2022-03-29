import React from "react";
import Header from './components/header/Header'
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/PortFolio";
import Metamask from "./components/metamask/Metamask";
import WalletCard from "./components/metamask/WalletCard";

const App = () => {
  return (
      <>
      <div className="container header__container">
        <h5>This is your</h5>
        <h1>PortFolio</h1>
        <h5 className="text-light">Create and buy a Folio token represented by any combination of crypto assets</h5>
      </div>
      <div className="container"> <Metamask /> </div>
      <div className="container portfolio__container">
        <Portfolio />
      </div>
      
      </>
  )
}

export default App