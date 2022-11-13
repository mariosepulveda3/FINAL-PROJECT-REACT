import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const {token} = useSelector(state => state.auth);
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
      {token &&
      <NavLink to="addMovie" activeclassname={"active"}>
        Add movie
      </NavLink>
      }

    </nav>
  );
};

export default Navbar;
