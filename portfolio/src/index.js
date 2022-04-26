import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.css";
import App from "./App";
import Welcome from "./routes/Welcome";
import Explore from "./routes/Explore";
import Create from "./routes/Create";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<App className="main" />}>
          <Route index element={<Welcome />} />
          <Route path="explore" element={<Explore />} />
          <Route path="create" element={<Create />} />
        </Route>
      </Routes>
    </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
