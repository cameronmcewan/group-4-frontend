import React, { useState } from "react";
import "./App.css";
import Portfolio from "./components/Portfolio";
import { UserContext } from "./userContext";
import Button from "@mui/material/Button";
import { ethers } from "ethers";

function App() {
  const [userAddress, setUserAddress] = useState("0x");
  const [userBalance, setUserBalance] = useState(0);

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
        <p>Welcome to PortFolio</p>
        <div>
          <h5>This is your</h5>
          <h1>PortFolio</h1>
          <h5>
            Create and buy a Folio token represented by any combination of
            crypto assets
          </h5>
        </div>
        <Button variant="contained" onClick={connectWalletHandler}>
          MetaMask
        </Button>
        {userAddress !== "0x" && ( // Only displays the div below if the user address has been set
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
