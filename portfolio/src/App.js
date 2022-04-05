import React, { useState } from "react";
import Portfolio from "./components/Portfolio";
import { UserContext } from "./helpers/userContext";
import Button from "@mui/material/Button";
import { ethers } from "ethers";
// import Logo from './assets/Folio_logo_no-bg.png'

function App() {
  const [userAddress, setUserAddress] = useState();
  const [userBalance, setUserBalance] = useState();

  const connectWalletHandler = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          setUserAddress(result[0]);
          getUserBalance(result[0]);
        });
    } else {
      window.alert("Please install MetaMask");
    }
  };

  const getUserBalance = (address) => {
    window.ethereum
      .request({ method: "eth_getBalance", params: [address, "latest"] })
      .then((balance) => {
        setUserBalance(ethers.utils.formatEther(balance));
      });
  };

  return (
    // Sets the user address inside the React context, which can be used from any downstream component
    <UserContext.Provider value={userAddress}>
      <div>
        <header>

        <h5>This is your</h5>
          <h1>PortFolio</h1>
          <h5>
            Create and buy a Folio token represented by any combination of
            crypto assets
          </h5>
        </header>
        <Button variant="contained" onClick={connectWalletHandler}>
          MetaMask
        </Button>
        {userAddress && ( // Only displays the div below if the user address has been set
          <div>
            <h3>Address: {userAddress}</h3>
            <h3>Balance: {userBalance}</h3>
          </div>
        )}
        <div>
          <Portfolio />
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
