import React from "react";
import styled from "styled-components";

const StatCard = ({ icon, title, info }) => {
  return (
    <StyledStatCard>
      <Header>
        {icon}
        <h4 className="title">{title}</h4>
      </Header>
      <Content>
        <p className="info">{info}</p>
      </Content>
    </StyledStatCard>
  );
};

const StyledStatCard = styled.div`
  display: flex;
  // flex-basis: 100%;
  flex-flow: column;
  // align-items: center;
  // justify-content: center;
  padding: 1rem 0;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.25rem;

  .icon,
  .title {
    color: #29323d;
  }
  .icon {
    font-size: 1.5rem;
    margin-right: 0.5rem;
  }

  .title {
    font-family: Arial;
    font-size: 1.2rem;
  }
`;

const Content = styled.div`
  .info {
    margin-left: 2rem;
    font-family: Arial;
  }
`;

export default StatCard;
