import React from "react";
import styled from "styled-components";
import NavLinks from "./NavLinks";

const Nav = () => (
  <StyledNav>
    <Title>Repbase</Title>
    <NavLinks />
  </StyledNav>
);

export default Nav;

const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 1.5rem auto;
`;

const Title = styled.h1`
  color: rgba(41, 50, 61, 1);
  flex-grow: 1;
  flex-basis: 33%;
  // flex-shrink 1;
`;
