import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <nav className="sideContainer">
        <Link to="/" className="text-gray-800 hover:text-blue-600">
        Users
      </Link>
      <Link to="/products" className="text-gray-800 hover:text-blue-600">
        Products
      </Link>
      </nav>
    </>
  )
}

export default Sidebar