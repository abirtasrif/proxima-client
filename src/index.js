import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ProjectContextProvider } from "./context/ProjectContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProjectContextProvider>
        <App />
      </ProjectContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
