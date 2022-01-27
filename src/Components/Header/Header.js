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
  padding: 7rem 0;
  display: flex;29323d
  justify-content: center;
  align-items: center;
`;
