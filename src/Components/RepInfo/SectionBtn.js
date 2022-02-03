import React from "react";
import styled from "styled-components";

const SectionBtn = ({ children, changeSection, component }) => {
  return (
    <StyledSectionBtn onClick={() => changeSection(component)}>
      {children}
    </StyledSectionBtn>
  );
};

const StyledSectionBtn = styled.div`
  flex-basis: 100%;
  border: 1px solid black;
  border-radius: 1rem 1rem 0 0;
  padding: 0.75rem 0;
  cursor: pointer;
`;

export default SectionBtn;
