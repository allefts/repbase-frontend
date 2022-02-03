import React from "react";
import styled from "styled-components";
import Body from "../Components/RepInfo/Body";
import Header from "../Components/RepInfo/Header";

const RepInfoPage = () => {
  return (
    <StyledRepInfoPage>
      <Header />
      <Body />
    </StyledRepInfoPage>
  );
};

export default RepInfoPage;

const StyledRepInfoPage = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 2rem;
`;
