import React, { useState, useContext } from "react";
import { UserContext } from "../helpers/UserContext";
import { ethers } from "ethers";

const Metamask = () => {

  const MetaMaskClick = () => {
    connectWalletHandler();
    changeText("You are connected to MetaMask");
  };

  const [buttonText, setButtonText] = useState("Connect to MetaMask"); 
  const changeText = (text) => setButtonText(text);

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
    <button className="btn btn-cta" onClick={MetaMaskClick}>
      <p>{buttonText}</p>
      {address && ( // Only displays the div below if the user address has been set
        <div>
          <h3>Address: {address}</h3>
          <h3>Balance: {userBalance}</h3>
        </div>
      )}
    </button>
  );
};

export default Metamask;