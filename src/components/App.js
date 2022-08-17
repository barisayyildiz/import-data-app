import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@jotforminc/jotform.css";

import Heading from "./Heading";
import Footer from "./Footer";

// Pages
import HomePage from "../pages/HomePage";
import ImportPage from "../pages/ImportPage";
import SuccessPage from "../pages/SuccessPage";

// Modal
import FormSelector from "../components/FormSelector";
import AuthModal from "../components/AuthModal";

import "../styles/App.scss";

import { getCookie, setCookie } from "../utils";

function App() {
  return (
    <div className="App font-circular">
      <FormSelector />
      <Router>
        <Heading />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/import" element={<ImportPage />}></Route>
          <Route path="/success" element={<SuccessPage />}></Route>
        </Routes>
        <Footer />
      </Router>
      <AuthModal />
    </div>
  );
}

export default App;
