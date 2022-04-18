import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from "./routes/Welcome";
import Explore from './routes/Explore';
import Create from './routes/Create';
import Footer from "./components/Footer";

function App() {


  return (
    <>
    <Navbar />
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="explore" element={<Explore />} />
            <Route path="create" element={<Create />} />
          </Routes>
        </Router>
    <Footer />
    </>
  );
};

export default App;