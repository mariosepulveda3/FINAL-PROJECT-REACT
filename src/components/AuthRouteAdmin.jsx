import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AuthRouteAdmin = ({ component }) => {
	const { user } = useSelector((state) => state.auth);
	if (!user) return <Navigate to="/" />
	if (user.rol !== "admin") return <Navigate to="/login" />;
	if (user.rol === "admin") return component;
};

export default AuthRouteAdmin;
