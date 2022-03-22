import React from "react";
import styled from "styled-components";
import SetSolutionLogo from "../../assets/setsolutions.png";

const Ad = () => {
  return (
    <StyledAd>
      <img className="adLogo" src={SetSolutionLogo} alt="Logo" />
    </StyledAd>
  );
};

const StyledAd = styled.div`
  .adLogo {
    background-color: black;
  }

  @media (max-width: 750px) {
    margin-top: 2rem;
  }
`;

export default Ad;
