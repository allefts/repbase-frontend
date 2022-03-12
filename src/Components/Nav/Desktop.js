import React, { useRef } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

const Desktop = ({ title, width }) => {
  const markerRef = useRef(null);

  const moveMarker = ({ target }) => {
    markerRef.current.style.left = target.offsetLeft + "px";
    markerRef.current.style.width = target.offsetWidth + "px";
  };

  return (
    <StyledDesktop>
      <NavLink className="title" to="/" onMouseEnter={(e) => moveMarker(e)}>
        {title}
      </NavLink>
      <NavLinks id="navLinks">
        <Marker ref={markerRef} />
        <NavLink
          onMouseEnter={(e) => moveMarker(e)}
          className="navLink"
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          onMouseEnter={(e) => moveMarker(e)}
          className="navLink"
          to="/companies"
        >
          Companies
        </NavLink>
        <NavLink
          onMouseEnter={(e) => moveMarker(e)}
          className="navLink"
          to="/support"
        >
          Support
        </NavLink>
      </NavLinks>
      <NavLink
        className="navLink"
        to="/signup"
        onMouseEnter={(e) => moveMarker(e)}
      >
        Sign Up
      </NavLink>
    </StyledDesktop>
  );
};

export default Desktop;

const Marker = styled.div`
  position: absolute;
  left: 0;
  bottom: 20px;

  height: 4px;
  width: 0;

  background: ${(props) => props.theme.colors.gunmetal};
  transition: 0.5s;
  border-radius: 4px;
`;

const NavLinks = styled.div`
  // margin: 0 6rem 0 0;

  .signUpBtn {
    padding: 6px;
    background: white;
    outline: none;
    border: 0;
    font-size: 1rem;
    cursor: pointer;
  }
`;

const StyledDesktop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  position: relative;
  // border-bottom: 2px solid ${(props) => props.theme.colors.gunmetal};

  .navLink {
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

  .title {
    cursor: pointer;
    color: ${(props) => props.theme.colors.gunmetal};
    text-decoration: none;

    &:hover {
      color: ${(props) => props.theme.colors.frost};
    }
  }
`;
