import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./routes/Landing";
import Explore from "./routes/Explore";
import Create from "./routes/Create";
import { UserContext } from "./helpers/UserContext";

function App() {
  const [address, setAddress] = useState();
  const userContext = { address, setAddress };

  return (
    <UserContext.Provider value={userContext}>
      <Navbar>
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="explore" element={<Explore />} />
            <Route path="create" element={<Create />} />
          </Routes>
        </Router>
      </Navbar>
    </UserContext.Provider>
  );
}

export default App;
