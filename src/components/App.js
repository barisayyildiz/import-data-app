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

const DefaultFileInput = () => {
  return (
    <div
      className="test"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px 30px",
        gap: "10px",
        width: "835px",
        margin: "0px auto",
        backgroundColor: "rgba(243, 243, 254, 0.3)",
        border: "1px dashed #E3E5F5",
        borderRadius: "4px",
        cursor: "pointer",
      }}
    >
      <form>
        <input
          type="file"
          id="file"
          hidden
          onFileUpload={(e) => console.log(e)}
        ></input>
        <label for="file">
          <CloudIcon />
          <p>Upload Your File</p>
          <p>
            Choose a file to import your data. All .csv or .xls types are
            supported.
          </p>
        </label>
      </form>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <ImportPage />
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
