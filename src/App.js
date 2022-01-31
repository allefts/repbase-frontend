import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

//Components
import Nav from "./Components/Nav/Nav";
import RepsPage from "./pages/Reps";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import SupportPage from "./pages/Support";

const App = () => (
  <>
    <Nav />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/companies" element={<RepsPage />} />
      <Route path="/support" element={<SupportPage />} />
    </Routes>
  </>
);

export default App;
