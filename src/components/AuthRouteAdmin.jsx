import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AuthRouteAdmin = ({ component }) => {
	const { user } = useSelector((state) => state.auth);
	if (user !== "admin") return <Navigate to="/login" />;
	if (user === "admin") return component;
};

export default AuthRouteAdmin;
