import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="" activeclassname={"active"}>
        Home
      </NavLink>
      <NavLink to="search" activeclassname={"active"}>
        Search
      </NavLink>
      <NavLink to="login" activeclassname={"active"}>
        Log In
      </NavLink>
      <NavLink to="register" activeclassname={"active"}>
        Register
      </NavLink>
    </nav>
  );
};

export default Navbar;
