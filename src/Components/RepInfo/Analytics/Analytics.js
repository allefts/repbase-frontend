import React from "react";
import styled from "styled-components";
import { AiFillEye, AiOutlineSearch } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { GoGraph } from "react-icons/go";
import StatCard from "./StatCard";

const stats = [
  {
    icon: <BsFillPeopleFill className="icon" />,
    title: "0 profile views ",
    p: "Discover who's viewed your profile",
  },
  {
    icon: <GoGraph className="icon" />,
    title: "0 article views ",
    p: "Check out who's engaging with your articles",
  },
  {
    icon: <AiOutlineSearch className="icon" />,
    title: "0 search appearances ",
    p: "See how often you appear in search results",
  },
];

const Analytics = () => {
  return (
    <StyledAnalytics>
      <h2>Analytics</h2>
      <Private>
        <AiFillEye />
        <h4>Private to you</h4>
      </Private>
      <StatCards>
        {stats.map(({ icon, title, p }, idx) => {
          return <StatCard key={idx} icon={icon} title={title} info={p} />;
        })}
      </StatCards>
    </StyledAnalytics>
  );
};

const StyledAnalytics = styled.div`
  margin: 2rem 0;
  padding: 2rem;
  border: 2px solid #29323d;
  border-radius: 1rem;
  // background: #6d98ba;
`;

const Private = styled.div`
  display: flex;
  align-items: center;
  opacity: 0.5;
`;

const StatCards = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  // text-align: center;
  //   flex-wrap: wrap;
`;

export default Analytics;
