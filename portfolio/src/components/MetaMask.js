import React, { useState, useContext } from "react";
import { UserContext } from "../helpers/UserContext";
import { ethers } from "ethers";

const MetaMask = () => {
  const { address, setAddress } = useContext(UserContext);
  const [userBalance, setUserBalance] = useState();

  const connectWalletHandler = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          setAddress(result[0]);
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
    <button className="btn btn-primary" onClick={connectWalletHandler}>
      <p>Connect to MetaMask</p>
      {address && ( // Only displays the div below if the user address has been set
        <div>
          <h3>Address: {address}</h3>
          <h3>Balance: {userBalance}</h3>
        </div>
      )}
    </button>
  );
};

export default MetaMask;
