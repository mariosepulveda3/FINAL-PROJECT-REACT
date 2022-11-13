import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOutUser } from "../redux/auth/auth.functions";

const LogOutButton = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logOut = () => {
    logOutUser(navigate, dispatch);
  };
  return <button onClick={logOut}>Log Out</button>;
};

export default LogOutButton;
