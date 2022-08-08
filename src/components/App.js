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

const DefaultFilePreviewRenderer = (props) => {
  const {
    fileName = "NameName.xls",
    fileSize = "216 KB",
    fileIcon = <FileIcon />,
  } = props;
  return (
    <div
      className="
				flex flex-row items-center p-4 g-4 
				border radius bg-navy-25 mx-auto my-0 border-navy-100"
      style={{
        width: "70%",
      }}
    >
      <div className="file_icon order-first grow-0">{fileIcon}</div>
      <div className="details flex-col order-first grow-1 gap-2.5 p-2.5">
        <p className="color-navy-700 font-medium line-height-md">{fileName}</p>
        <p className="color-navy-300 line-height-sm">{fileSize}</p>
      </div>
      <div
        className="outline-button order-last 
				grow-0 flex gap-1 p-2.5 bg-white border-gray-75 border radius"
      >
        <DeleteIcon />
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
