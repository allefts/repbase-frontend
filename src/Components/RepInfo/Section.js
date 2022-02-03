import React from "react";
import styled from "styled-components";

const Section = ({ section }) => {
  return <StyledSection>{section}</StyledSection>;
};

const StyledSection = styled.div`
  padding: 1rem;
`;

export default Section;
