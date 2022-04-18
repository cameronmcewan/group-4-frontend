import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="explore" element={<Explore />} />
          <Route path="create" element={<Create />} />
        </Routes>
      </Router>
      {/* </Navbar> */}
      <Footer />
    </UserContext.Provider>
  );
}

export default App;
