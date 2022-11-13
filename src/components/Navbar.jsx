import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import NavBarLink from "./NavBarLink";

const Navbar = () => {
  const {token} = useSelector(state => state.auth);
  return (
    <nav className="navbar">
      <NavBarLink route="" name="Home" />
      <NavBarLink route="search" name="Search" />
      <NavBarLink route="login" name="Login" />
      <NavBarLink route="register" name="Register" />
      {token &&
        <NavBarLink route="addMovie" name="AddMovie" />
      }

    </nav>
  );
};

export default Navbar;
