import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Theme from "./utils/theme";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <Theme>
      <App />
    </Theme>
  </BrowserRouter>,
  document.querySelector("#root")
);
