import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Nav from "./components/nav";
import Home from "./pages/home";
import Search from "./pages/search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "/search", element: <Search /> },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Nav />
    <RouterProvider router={router} />
  </React.StrictMode>
);
