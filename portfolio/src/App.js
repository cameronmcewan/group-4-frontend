import React, { useState } from "react";
import Portfolio from "./components/Portfolio";
import { UserContext } from "./helpers/userContext";
import Button from "@mui/material/Button";
import { ethers } from "ethers";
import Explore from "./routes/Explore";
import Create from "./routes/Create";
import { Link } from "react-router-dom";
import Landing from "./routes/Landing";
import { Route, Routes as Switch } from 'react-router-dom';

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

  // let routes = (
  //   <Switch>
  //     <Route exact path="/">
  //       <Landing />
  //     </Route>
  //     <Route path="/explore">
  //       <Explore />
  //     </Route>
  //     <Route path="/create">
  //       <Create />
  //     </Route>
  //   </Switch>
  // );

  return (
    // Sets the user address inside the React context, which can be used from any downstream component
    <UserContext.Provider value={userAddress}>
      <div>
        <Button className="" onClick={connectWalletHandler}>
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
