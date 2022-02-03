import React from "react";
import styled from "styled-components";

import ProofpointLogo from "../../assets/Proofpoint.svg";

const Header = () => {
  return (
    <StyledHeader>
      <img className="companyLogo" src={ProofpointLogo} />
      <CompanyInfo>
        Proofpoint, Inc. is an American enterprise security company based in
        Sunnyvale, California that provides software as a service and products
        for email security, data loss prevention, electronic discovery, and
        email archiving. In 2021, Proofpoint was acquired by private equity firm
        Thoma Bravo for $12.3 billion.
      </CompanyInfo>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  margin-top: 3rem;
  max-width: 100%;
  margin: 0 auto;

  .companyLogo {
    max-width: 300px;
  }
`;

const CompanyInfo = styled.p`
  font-size: 1.2rem;
  font-family: Raleway, sans-serif;
  padding: 2rem 0;
`;

export default Header;
