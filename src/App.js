import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

//Components
import styled from "styled-components";
import Nav from "./Components/Nav/Nav";
import RepsPage from "./pages/Reps";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import SupportPage from "./pages/Support";
import RepInfoPage from "./pages/RepInfo";
import SignUpPage from "./pages/SignUp";
import Footer from "./Components/Footer/Footer";

const App = (props) => (
  <div>
    <StyledApp>
      <Nav />
      <Routes className="mainContent">
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/companies" element={<RepsPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/repinfo" element={<RepInfoPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </StyledApp>
    <Footer />
  </div>
);

const StyledApp = styled.div`
  min-height: 100vh;
  position: relative;
`;

export default App;
