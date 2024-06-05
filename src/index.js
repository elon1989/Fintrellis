import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import GlobalStyle from "./globalStyles";
import { ModalProvider } from 'styled-react-modal'
import { BlogPostProvider } from "./State/blogContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BlogPostProvider>
    <BrowserRouter>
    <ModalProvider>      
    <GlobalStyle />
      <App />
    </ModalProvider>      
    </BrowserRouter>
    </BlogPostProvider>
  </React.StrictMode>
);
