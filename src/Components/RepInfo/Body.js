import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { MdVerified } from "react-icons/md";

import Headshot from "../../assets/Headshot1.jpg";
import videoPlaceholder from "../../assets/video.jpg";

const Body = ({ togglePopup }) => {
  return (
    <RepInfoWrapper>
      <RepInfo>
        <Verif>
          <MdVerified /> Verified Vendor
        </Verif>
        <StyledRep>
          <img className="headshot" src={Headshot} />
        </StyledRep>
        <h3 className="name">John Doe</h3>
        <p className="occupation">Regional Sales Director</p>
        <p className="email">john.doe@proofpoint.com</p>
        <p className="phone">(406) 242-3597</p>
        <p className="location">Austin, TX</p>
        <ContactBtn onClick={togglePopup}>Contact Me</ContactBtn>
        <Favorite>
          <AiOutlineStar className="star" /> Add to Short List
        </Favorite>
      </RepInfo>
      <RepDemo>
        <h3 className="demoTitle">Proofpoint Overview & Demo</h3>
        <video className="demoVideo" controls poster={videoPlaceholder}></video>
      </RepDemo>
    </RepInfoWrapper>
  );
};

const RepInfoWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  margin-top 3rem;
  // border-bottom: 1px solid black;

  @media (max-width: 1100px) {
    justify-content: center;
    align-items: center;
  }
`;

const RepInfo = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  flex: 0 1 500px;
  font-size: 1rem;
  line-height: 1.6;

  .email,
  .location {
    margin-bottom: 1rem;
  }

  .occupation {
    margin-top: 1rem;
  }
`;

const RepDemo = styled.div`
  flex: 1 1 600px;
  text-align: center;

  @media (max-width: 1100px) {
    margin-top: 3rem;
  }

  .demoVideo {
    max-width: 100%;
    // margin-top: 0.5rem;
  }
`;

const StyledRep = styled.div`
  height: 125px;
  width: 125px;
  margin: 1rem 0;

  .headshot {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ContactBtn = styled.button`
  padding: 10px 25px;
  border-radius: 10rem;
  background: rgb(41, 50, 61);
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  font-family: Raleway, sans-serif;
`;

const Favorite = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;

  .star {
    margin-right: 6px;
    color: rgb(98, 156, 68);
  }
`;

const Verif = styled.div`
  display: flex;
  align-items: center;

  & > * {
    margin-right: 6px;
    color: rgb(98, 156, 68);
  }
`;

export default Body;
