import React, { Children } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Components/Home";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Register from "../Components/Register";

let routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Register />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      
    ],
  },
]);


export default routes;
