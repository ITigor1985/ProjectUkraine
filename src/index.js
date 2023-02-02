import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import "./styles/index.css";

const rootView = document.getElementById("root");

if (rootView) {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter basename="/">
        <App />
      </BrowserRouter>
    </React.StrictMode>,
    rootView
  );
}
