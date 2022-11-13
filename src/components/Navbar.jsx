import React from "react";
import { useSelector } from "react-redux";
import LogOutButton from "./LogOutButton";
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
      <LogOutButton />

    </nav>
  );
};

export default Navbar;
