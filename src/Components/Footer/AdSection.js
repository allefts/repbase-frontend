import React from "react";
import styled from "styled-components";
import Ad from "./Ad";

const AdSection = () => {
  return (
    <StyledAdSection>
      <Ad />
      <Ad />
      <Ad />
      <Ad />
    </StyledAdSection>
  );
};

const StyledAdSection = styled.div`
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;

  @media (max-width: 750px) {
    flex-flow: column;
    align-items: center;
  }
`;

export default AdSection;
