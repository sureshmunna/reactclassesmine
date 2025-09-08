import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className="min-w-[200px] bg-black flex flex-col">
      <NavLink
        to="/app/user"
        className={({ isActive }) =>
          `w-full h-10 flex items-center px-3 mb-1 no-underline ${
            isActive ? "bg-green-500 text-white" : "bg-red-500 text-white"
          }`
        }
      >
        Users
      </NavLink>

      <NavLink
        to="/app/products"
        className={({ isActive }) =>
          `w-full h-10 flex items-center px-3 mb-1 no-underline ${
            isActive ? "bg-green-500 text-white" : "bg-red-500 text-white"
          }`
        }
      >
        Products
      </NavLink>
    </nav>
  );
};

export default Sidebar;
