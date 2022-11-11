import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="" activeclassname={"active"}>
        Home
      </NavLink>
      <NavLink to="login" activeclassname={"active"}>
        Login
      </NavLink>
      <NavLink to="register" activeclassname={"active"}>
        Register
      </NavLink>
    </nav>
  );
};

export default Navbar;
