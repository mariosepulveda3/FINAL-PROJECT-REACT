import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOutUser } from "../redux/auth/auth.functions";
import GenericButton from "./GenericButton";

const LogOutButton = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const logOut = () => {
		logOutUser(navigate, dispatch);
	};
	return (
		<GenericButton
			func={logOut}
			text="Log Out"
			bgColor="whitesmoke"
			textColor="black"
			borderRadius="10px"
			size="s"
			fontSize="18px"
		/>
	);
};

export default LogOutButton;
