import React from "react";
import styled from "styled-components";
import AdSection from "./AdSection";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
    <StyledFooter>
      <AdSection />
      <FooterLinks />
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  padding: 1.5rem;
  height: 50px;
`;

export default Footer;
