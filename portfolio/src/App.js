import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from "./routes/Landing";
import Explore from './routes/Explore';
import Create from './routes/Create';

function App() {


  return (
    // Sets the user address inside the React context, which can be used from any downstream component
    <>
    <Navbar />
    
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="explore" element={<Explore />} />
            <Route path="create" element={<Create />} />
          </Routes>
        </Router>
    </>
  );
};

export default App;


      {/* <div>
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
      </div> */}