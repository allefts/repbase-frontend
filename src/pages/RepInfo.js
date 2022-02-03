import React from "react";
import styled from "styled-components";
import StyledSection from "../Components/RepCard/CardSection";
import Body from "../Components/RepInfo/Body";
import Header from "../Components/RepInfo/Header";
import ToggleSection from "../Components/RepInfo/ToggleSection";

const RepInfoPage = () => {
  return (
    <StyledRepInfoPage>
      <Header />
      <Body />
      <ToggleSection />
    </StyledRepInfoPage>
  );
};

export default RepInfoPage;

const StyledRepInfoPage = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 2rem;
`;
