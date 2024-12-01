import "./App.css";

import React from "react";
import NavBar from "./components/NavBar";
import Logo from "./components/Logo";
import Commit from "./components/Commit";
import TextBox from "./components/TextBox";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Darkmode from "./components/Darkmode";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Darkmode />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {" "}
                <Logo />
                <Commit />
                <TextBox />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;