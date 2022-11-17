import "./styles/NavBar.scss";
import React from "react";
import { useSelector } from "react-redux";
import LogOutButton from "./LogOutButton";
import NavBarLink from "./NavBarLink";
import { Link } from "react-router-dom";

const Navbar = () => {
	const { user, token } = useSelector((state) => state.auth);
	return (
		<nav className="navbar">
			<div className="home">
				<NavBarLink route="" name="Home" />
				{token && (
					<>
						<NavBarLink route="cart" name="Cart" />
						{user.rol === "admin" && (
							<>
								<NavBarLink route="addMovie" name="Add Movie" />
								<NavBarLink route="editMovie" name="Edit Movie" />
								<NavBarLink route="deleteMovie" name="Delete Movie" />
							</>
						)}
					</>
				)}
			</div>
			<Link to="/">
				<img
					className="logo"
					src="https://i0.wp.com/www.movieaddicts.nl/wp-content/uploads/2015/08/LOGO-MOVIEADDICTS-1.png?fit=822%2C464&ssl=1"
					alt="logo"
				/>
			</Link>
			<div className="user">
				{!token &&
				<>
					<NavBarLink route="login" name="Login" />
					<NavBarLink route="register" name="Register" />
				</>
				}
				{token && (
					<>
						<p className="welcome">Welcome {user.username}</p>
						<NavBarLink route="user" name="My Account" />
						<LogOutButton />
					</>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
