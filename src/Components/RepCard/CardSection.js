import React from "react";
import styled from "styled-components";

const StyledSection = styled.div`
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-gap: 10rem;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  place-items: center;
  margin-top: 3rem;

  //   display: flex;
  //   flex-flow: row wrap;
  //   justify-content: center;
  //   align-items: center;

  @media (max-width: 360px) {
    width: 95%;
  }
`;

const CardSection = ({ children }) => {
  return <StyledCardSection>{children}</StyledCardSection>;
};

export default StyledSection;
