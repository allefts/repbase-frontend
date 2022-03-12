import React, { useState } from "react";
import styled from "styled-components";
// import StyledSection from "../Components/RepCard/CardSection";
import Body from "../Components/RepInfo/Body";
import ContactPopup from "../Components/Popup/ContactPopup";
import Header from "../Components/RepInfo/Header";
import ToggleSection from "../Components/RepInfo/ToggleSection";
import Analytics from "../Components/RepInfo/Analytics/Analytics";

const RepInfoPage = () => {
  const [popupStatus, setPopupStatus] = useState(false);

  const togglePopup = () => setPopupStatus(!popupStatus);

  return (
    <StyledRepInfoPage>
      <Header />
      <Body togglePopup={togglePopup} />
      <ContactPopup trigger={popupStatus} togglePopup={togglePopup} />
      <Analytics />
      <ToggleSection />
    </StyledRepInfoPage>
  );
};

export default RepInfoPage;

const StyledRepInfoPage = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 2rem;
`;
