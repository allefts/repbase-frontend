import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    gunmetal: "#29323d",
    grey: "#9AADBF",
    frost: "#6D98BA",
  },
  fonts: ["Raleway", "sans-serif", "Merriweather"],
  fontSize: {},
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
