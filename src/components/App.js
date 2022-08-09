import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Heading from "./Heading";
import Home from "./Home";
import Footer from "./Footer";

import "../styles/App.scss";
import "@jotforminc/jotform.css";

import FileIcon from "../assets/svg/IconFile.jsx";
import CloudIcon from "../assets/svg/IconCloud.jsx";
import DeleteIcon from "../assets/svg/IconDelete.jsx";
import ImportPage from "../pages/ImportPage";
import Dropdown from "./Dropdown";

function App() {
  return (
    <div className="App">
      <Router>
        <Heading />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/import" element={<ImportPage />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
