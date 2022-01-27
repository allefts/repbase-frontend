import React from "react";
import "./App.css";

//Components
import Nav from "./Components/Nav/Nav";
import Header from "./Components/Header/Header";
import CardSection from "./Components/RepCard/CardSection";
import Card from "./Components/RepCard/Card";

const App = () => (
  <>
    <Nav />
    <Header />
    <CardSection>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </CardSection>
  </>
);

export default App;
