import React from "react";
import Nav from "../Components/Nav/Nav";
import Header from "../Components/Header/Header";
import CardSection from "../Components/RepCard/CardSection";
import Card from "../Components/RepCard/Card";

const RepsPage = () => {
  return (
    <>
      <Header />
      <CardSection>
        <Card />
        <Card />
        <Card />
      </CardSection>
    </>
  );
};

export default RepsPage;
