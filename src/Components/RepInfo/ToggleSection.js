import React, { useState } from "react";
import styled from "styled-components";

import SectionBtn from "./SectionBtn";
import Resources from "./Sections/Resources";
import Events from "./Sections/Events";
import Products from "./Sections/Product";
import Section from "./Section";

const Sections = [
  { title: "Resource Library", component: <Resources /> },
  { title: "Webinar's & Events", component: <Events /> },
  { title: "Product Description & Use Case", component: <Products /> },
];

const ToggleSection = () => {
  const [selectedSection, setSelectedSection] = useState(<Resources />);
  const changeSection = (newSection) => {
    setSelectedSection(newSection);
  };

  const renderSectionNames = Sections.map(({ title, component }, idx) => {
    return (
      <SectionBtn key={idx} changeSection={changeSection} component={component}>
        {title}
      </SectionBtn>
    );
  });

  return (
    <StyledToggleSection>
      <AvailableSections>{renderSectionNames}</AvailableSections>
      <Section section={selectedSection} />
    </StyledToggleSection>
  );
};

const StyledToggleSection = styled.div`
  margin-top: 12rem;
`;

const AvailableSections = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export default ToggleSection;
