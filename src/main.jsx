import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ContextProviders from "./Providers/ContextProviders/ContextProviders.jsx";
import { RouterProvider } from "react-router-dom";
import Router from "./Router/Router.jsx";
import UserProvider from "./Providers/UserProvider/UserProvider.jsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster />
    <UserProvider>
      <ContextProviders>
        <RouterProvider router={Router} />
      </ContextProviders>
    </UserProvider>
  </React.StrictMode>
);
