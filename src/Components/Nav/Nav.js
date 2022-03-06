import React from "react";
import styled from "styled-components";

import { useWindowDimensions } from "../../utils/getWindowDimensions";
import Desktop from "./Desktop";
import Mobile from "./Mobile";

const Nav = () => {
  const { height, width } = useWindowDimensions();
  return width < 968 ? (
    <Mobile title={<StyledTitle>Repbase</StyledTitle>} />
  ) : (
    <Desktop title={<StyledTitle>Repbase</StyledTitle>} width={width} />
  );
};

export default Nav;

const StyledNav = styled.nav`
  padding: 1.5rem;
  width: 100%;
`;

const StyledTitle = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.frost}
  cursor: pointer;
`;
