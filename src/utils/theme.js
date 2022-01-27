import styled from "styled-components";
import { RuntimeGlobals } from "webpack";

const theme = {
  main: {
    name: "Default",
    colors: {
      main: "#29323d",
      accent1: "#9aadbf",
      accent2: "#6d98BA",
    },
    button: {
      fontFamily: "Raleway, sans-serif",
      border: `2px solid ${theme.colors.main}`,
    },
    fonts: {
      primary: "Raleway, sans-serif",
      secondary: "Merriweather, sans-serif",
    },
  },
};
