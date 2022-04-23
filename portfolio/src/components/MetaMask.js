import React, { useState, useContext } from "react";
import { UserContext } from "../helpers/UserContext";
import { ethers } from "ethers";

const MetaMask = () => {
  const [buttonText, setButtonText] = useState("Connect to MetaMask");
  const [userBalance, setUserBalance] = useState();
  const userContext = useContext(UserContext);

  const handleButtonClick = () => {
    connectWalletHandler();
    changeText("You are connected to MetaMask");
  };

  const changeText = (text) => {
    setButtonText(text);
  };

  const connectWalletHandler = () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      userContext.setSigner(provider.getSigner());
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          userContext.setAddress(result[0]);
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
    <button className="btn btn-cta" onClick={handleButtonClick}>
      {buttonText}
      {userContext.address && ( // Only displays the div below if the user address has been set
        <div>
          <h6>Address: {userContext.address}</h6>
          <h6>Balance: {userBalance}</h6>
        </div>
      )}
    </button>
  );
};

export default MetaMask;
