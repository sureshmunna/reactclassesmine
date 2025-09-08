import React from "react";
import { createBrowserRouter } from "react-router-dom";

import SignUp from "../Components/SingUp";
import Login from "../Components/Login";
import App from "../App";
import Users from "../Components/Users";
import Products from "../Components/Products";
import UserDetails from "../Components/UserDetails";
import ProductDetails from "../Components/ProductDetails";

// import Home from "../Components/Home";   // example page
// import About from "../Components/About"; // example page

let routes = createBrowserRouter([
  {
    path: "/",
    children: [
      { path: "/", element: <SignUp /> },
      { path: "/login", element: <Login /> },
    ],
  },
  {
    path: "/app",
    element: <App />,
    children: [
      { path: "user", element: <Users /> },
      { path: "user/:id", element: <UserDetails /> }, 
      { path: "products", element: <Products /> },
      { path: "products/:id", element: <ProductDetails /> } 
    ],
  },
]);

export default routes;
