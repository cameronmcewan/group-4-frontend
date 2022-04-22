import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { UserContext } from "./helpers/UserContext";

function App() {
  // Address of Metamask user
  const [address, setAddress] = useState();
  // Signer to enable user to interact with contracts
  const [signer, setSigner] = useState();
  // Context containing user address and signer object to be reused across app
  const userContext = { address, setAddress, signer, setSigner };

  return (
    <UserContext.Provider value={userContext}>
      <Navbar />
      <Outlet />
      <Footer />
    </UserContext.Provider>
  );
}

export default App;
