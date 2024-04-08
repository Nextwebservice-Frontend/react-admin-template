import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ContextProviders from "./Providers/ContextProviders/ContextProviders.jsx";
import { RouterProvider } from "react-router-dom";
import Router from "./Router/Router.jsx";
import 'rsuite/dist/rsuite.min.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProviders>
      
        <RouterProvider router={Router} />
      
    </ContextProviders>
  </React.StrictMode>
);
