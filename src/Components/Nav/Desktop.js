import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Desktop = ({ title }) => {
  return (
    <StyledDesktop>
      <Link to="/">{title}</Link>
      <NavLinks>
        <Link className="navLink" to="/about">
          About
        </Link>
        <Link className="navLink" to="/companies">
          Companies
        </Link>
        <Link className="navLink" to="/support">
          Support
        </Link>
      </NavLinks>
      <Button>Sign Up</Button>
    </StyledDesktop>
  );
};

export default Desktop;

const NavLinks = styled.div`
  margin: 0 6rem 0 0;
  .navLink {
    margin: 0 1.5rem;
    padding: 3px;
    color: inherit;
    text-decoration: none;
  }
`;

const Button = styled.button`
  padding: 6px;
  background: white;
  outline: none;
  border: 0;
  font-size: 1rem;
  cursor: pointer;
`;

const StyledDesktop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
`;
