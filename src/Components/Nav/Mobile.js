import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Mobile = ({ title }) => {
  const [openBurger, setOpenBurger] = useState(false);

  const closeHamburger = () => {
    setOpenBurger(false);
  };

  return (
    <StyledMobileNavWrapper>
      <StyledMobileNav>
        <Link to="/">{title}</Link>
        <Burger
          onClick={() => {
            setOpenBurger(!openBurger);
          }}
          openBurger={openBurger}
        >
          <BurgerLine className="line1" />
          <BurgerLine className="line2" />
          <BurgerLine className="line3" />
        </Burger>
      </StyledMobileNav>
      <OpenNav openBurger={openBurger}>
        <span>
          <Link onClick={closeHamburger} className="navLink" to="/about">
            About
          </Link>
        </span>
        <span>
          <Link onClick={closeHamburger} className="navLink" to="/companies">
            Companies
          </Link>
        </span>
        <span>
          <Link onClick={closeHamburger} className="navLink" to="/support">
            Support
          </Link>
        </span>
      </OpenNav>
    </StyledMobileNavWrapper>
  );
};

export default Mobile;

const OpenNav = styled.div`
  display: ${({ openBurger }) => (openBurger ? "flex" : "none")};
  transform: ${({ openBurger }) =>
    openBurger ? "translateX(0)" : "translateX(120%)"};

  transition: all 300ms ease-in-out;
  flex-flow: column;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 100px;
  right: 0;
  background: white;

  span {
    width: 100%;
    text-align: center;
    margin: 2rem 0;
    padding: 6px 0;
  }

  .navLink {
    transition: all 300ms ease-in-out;
    text-decoration: none;
    font-size: 1.5rem;
    color: #29323d;
    text-align: center;
  }
`;

const StyledMobileNav = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledMobileNavWrapper = styled.nav`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
`;

const Burger = styled.div`
  transition: all 300ms ease-in-out;
  cursor: pointer;

  & > * {
    background: #29323d;
  }

  &:hover > * {
    background: #6d98ba;
  }

  .line1 {
    transition: all 300ms ease-in-out;
    opacity: ${({ openBurger }) => (openBurger ? "0" : "1")};
  }
  
  .line2 {
    transition: all 300ms ease-in-out;
    transform: ${({ openBurger }) =>
      openBurger ? "rotate(-45deg)" : "rotate(0deg)"};

  }

  .line3 {
    transition: all 300ms ease-in-out;
    transform: ${({ openBurger }) =>
      openBurger
        ? "translateY(-9px) rotate(45deg)"
        : "rotate(0deg) translateY(0)"};
   
  }

  }
`;

const BurgerLine = styled.div`
  width: 25px;
  height: 3px;
  background: black;
  margin: 0.4rem 0;
`;
