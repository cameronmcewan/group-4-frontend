import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { UserContext } from "./helpers/UserContext";

function App() {
  const [address, setAddress] = useState();
  const userContext = { address, setAddress };

  return (
    <UserContext.Provider value={userContext}>
      <Navbar />
      <Outlet />
      <Footer />
    </UserContext.Provider>
  );
}

export default App;
