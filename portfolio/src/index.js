import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import App from './App';
import Explore from './routes/Explore';
import Create from './routes/Create';

ReactDOM.render(
  <React.StrictMode>
    <Router>
     <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="explore" element={<Explore />} />
        <Route path="create" element={<Create />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
