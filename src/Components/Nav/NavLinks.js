import React from "react";
import styled from "styled-components";

const NavLinks = () => {
  return (
    <NavLinkss>
      <div>
        <NavLink>About</NavLink>
        <NavLink>Companies</NavLink>
        <NavLink>Support</NavLink>
      </div>
      <SignUpBtn>Sign Up</SignUpBtn>
    </NavLinkss>
  );
};

export default NavLinks;

const NavLinkss = styled.ul`
  display: flex;
  flex-flow: row;
  flex-grow: 1;
  flex-basis: 66%;
  list-style: none;
  justify-content: space-between;
  align-items: center;
`;

const NavLink = styled.a`
  padding: 5px 10px;
  margin: 0 2rem;
  cursor: pointer;
  position: relative;
  font-size: 1.25rem;
  color: rgba(41, 50, 61, 1);
  transition: all 300ms ease-in-out;

  &:hover {
    color: #3ab7ff;
  }

  &:nth-child(2):after {
    content: "|";
    position: absolute;
    right: -30%;
    cursor: default;
    color: #3ab7ff;
  }

  &:nth-child(2):before {
    content: "|";
    position: absolute;
    left: -26%;
    cursor: default;
    color: #3ab7ff;
  }
`;

const SignUpBtn = styled.button`
  font-size: 1.25rem;
  padding: 7px 20px;
  border-radius: 5px;
  outline: none;
  text-align: center;
  border: 2px solid rgba(41, 50, 61, 1);
  cursor: pointer;
  transition: all 300ms ease-in-out;

  font-family: Ubuntu;
  font-weight: 600;

  &:hover {
    background: rgba(41, 50, 61, 1);
    color: #3ab7ff;
  }
`;
