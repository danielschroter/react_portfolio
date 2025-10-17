// import React from "react";

import ReactDOM from "react-dom/client";
// import { BrowserRouter as Router } from "react-router-dom";

import { App } from "./App";
import "./index.css";

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  // If the root element has children, it means react-snap has pre-rendered
  // the content, so we should hydrate instead of render
  ReactDOM.hydrateRoot(rootElement, <App />);
} else {
  // Otherwise, render normally (development mode)
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
