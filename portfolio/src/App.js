import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Welcome from "./routes/Welcome";
import Explore from "./routes/Explore";
import Create from "./routes/Create";
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
