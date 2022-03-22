import React from "react";
import Header from "../Components/Header/Header";
import CardSection from "../Components/RepCard/CardSection";
import Card from "../Components/RepCard/Card";
import styled from "styled-components";

const RepsPage = () => {
  return (
    <StyledRepsPage>
      <Header />
      <CardSection>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardSection>
    </StyledRepsPage>
  );
};

const StyledRepsPage = styled.div``;

export default RepsPage;
