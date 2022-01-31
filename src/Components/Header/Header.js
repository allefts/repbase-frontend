import React from "react";
import styled from "styled-components";

import Search from "./Search";

const Header = () => {
  return (
    <StyledHeader>
      <Search />
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  padding: 5rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
