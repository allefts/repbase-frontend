import React from "react";
import styled from "styled-components";
import ProofpointLogo from "../../assets/Proofpoint.svg";
import Headshot from "../../assets/Headshot1.jpg";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <StyledCard>
      <StyledRep>
        <img src={Headshot} />
      </StyledRep>
      <img src={ProofpointLogo} className="logoImg" />
      <StyledCardInfo>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </StyledCardInfo>
      <Link to="/repinfo" className="learnBtn">
        Learn More
      </Link>
    </StyledCard>
  );
};

export default Card;

const StyledCard = styled.div`
  min-width: 300px;
  border: 2px solid ${(props) => props.theme.colors.frost};
  display: flex;
  flex-flow: column;
  border-radius: 0.5rem;
  padding: 1rem 0;
  font-family: Raleway;

  .logoImg {
    max-width: 50%;
    margin: 1rem auto;
  }

  .learnBtn {
    text-align: center;
    text-decoration: inherit;
    width: 200px;
    place-self: center;
    outline: none;
    background: white;
    border: 2px solid rgb(41, 50, 61);
    padding: 5px 10px;
    border-radius: 2px;
    transition: all 300ms ease-in-out;
    color: ${(props) => props.theme.colors.gunmetal};

    &:hover {
      background: rgb(41, 50, 61);
      color: ${(props) => props.theme.colors.frost};
    }
  }
`;

export const StyledRep = styled.div`
  place-self: center;
  border-radius: 50%;
  height: 125px;
  width: 125px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const StyledCardInfo = styled.p`
  padding: 1rem;
  font-size: 1rem;
`;
