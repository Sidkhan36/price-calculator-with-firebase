import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import LayoutWrapper from "./layout/LayoutWrapper";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import { AuthProvider } from "./contexts/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <LayoutWrapper>
          <App />
        </LayoutWrapper>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
