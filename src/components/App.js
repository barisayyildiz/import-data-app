import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Heading from "./Heading";
import Footer from "./Footer";

// Pages
import Home from "./Home";
import ImportPage from "../pages/ImportPage";
import SuccessPage from "../pages/SuccessPage";

import FormSelector from "../components/FormSelector";

import "../styles/App.scss";
import "@jotforminc/jotform.css";

import { getCookie, setCookie } from "../utils";

function App() {
  if (!getCookie("apiKey")) {
    setCookie("apiKey", process.env.REACT_APP_API_KEY);
  }
  return (
    <div className="App">
      <FormSelector />
      <Router>
        <Heading />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/import" element={<ImportPage />}></Route>
          <Route path="/success" element={<SuccessPage />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
