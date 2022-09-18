import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ContextWrapper from "./context/ContextWrapper";
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <ContextWrapper>
        <App />
      </ContextWrapper>
    </HashRouter>
  </React.StrictMode>
);
