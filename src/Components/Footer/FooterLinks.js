import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const FooterLinks = (props) => {
  return (
    <StyledFooterLinks>
      <div className="logoContainer">
        <h1 className="title">Repbase</h1>
      </div>
      <div className="links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/companies">Companies</NavLink>
        <NavLink to="/support">Support</NavLink>
      </div>
      <div className="legal">
        <NavLink to="/">Terms and Conditions</NavLink>
        <NavLink to="/">Legal ©</NavLink>
      </div>
      <div className="socials">
        <NavLink to="https://twitter.com">
          <FaLinkedinIn />
        </NavLink>
        <NavLink to="https://instagram.com">
          <FaInstagram />
        </NavLink>
        <NavLink to="https://youtube.com">
          <FaTwitter />
        </NavLink>
      </div>
    </StyledFooterLinks>
  );
};

const StyledFooterLinks = styled.div`
  padding: 1.5rem 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-flow: wrap row;

  .title {
    color: ${(props) => props.theme.colors.gunmetal};
    text-decoration: none;
  }

  .links,
  .legal {
    display: flex;
    flex-flow: column;
  }

  .links,
  .socials,
  .legal {
    text-align: center;

    & > * {
      margin: 0 1.5rem;
      padding: 3px 3px 10px 3px;
      color: ${(props) => props.theme.colors.gunmetal};
      text-decoration: none;
      transition: all 300ms ease-in-out;
      font-weight: 500;
      font-size: 1.2rem;

      &:hover {
        color: ${(props) => props.theme.colors.frost};
      }
    }
  }

  @media (max-width: 750px) {
    flex-flow: column;
  }
`;

export default FooterLinks;
