import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./Header";
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
      <Dropdown
        style={{ width: "50%" }}
        id="country"
        options={[
          {
            value: "TR",
            label: "Turkey",
          },
          {
            value: "CZ",
            label: "Czechia",
          },
          {
            value: "US",
            label: "United States",
          },
        ]}
      />
      {/* <ImportPage /> */}
      {/* <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router> */}
    </div>
  );
}

export default App;
