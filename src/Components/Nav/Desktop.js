import React, { useRef } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

const Desktop = ({ title, width }) => {
  const markerRef = useRef(null);

  const moveMarkeronResize = () => {};

  const moveMarker = ({ target }) => {
    markerRef.current.style.left = target.offsetLeft + "px";
    markerRef.current.style.width = target.offsetWidth + "px";
  };

  return (
    <StyledDesktop>
      <Link className="title" to="/" onMouseEnter={(e) => moveMarker(e)}>
        {title}
      </Link>
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
      <Button onMouseEnter={(e) => moveMarker(e)}>Sign Up</Button>
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

  background: #29323d;
  transition: 0.5s;
  border-radius: 4px;
`;

const NavLinks = styled.div`
  margin: 0 6rem 0 0;
  // centers nav links

  .navLink {
    margin: 0 1.5rem;
    padding: 3px 3px 10px 3px;
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
  position: relative;
  border-bottom: 2px solid #29323d;

  .title {
    text-decoration: none;
  }
`;
