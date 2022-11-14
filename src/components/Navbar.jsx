import "./styles/NavBar.scss";
import React from "react";
import { useSelector } from "react-redux";
import LogOutButton from "./LogOutButton";
import NavBarLink from "./NavBarLink";

const Navbar = () => {
  const { token } = useSelector((state) => state.auth);
  return (
    <nav className="navbar">
      <div className="home">
        <NavBarLink route="" name="Home" />
        {token && (
        <>
          <NavBarLink route="addMovie" name="AddMovie" />
          <NavBarLink route="cart" name="Cart" />
        </>
      )}
      </div>
      <img
        src="https://i0.wp.com/www.movieaddicts.nl/wp-content/uploads/2015/08/LOGO-MOVIEADDICTS-1.png?fit=822%2C464&ssl=1"
        alt="logo"
      />
      <div className="user">
        <NavBarLink route="login" name="Login" />
        <NavBarLink route="register" name="Register" />
        {token && (
        <>
          <LogOutButton />
        </>
      )}
      </div>
    </nav>
  );
};

export default Navbar;
