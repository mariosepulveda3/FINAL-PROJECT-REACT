import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../redux/auth/auth.functions";

const Login = () => {
	const dispatch = useDispatch();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const navigate = useNavigate();
	const { error, isLoading } = useSelector((state) => state.auth);
	const login = (formdata) => {
		loginUser(formdata, navigate, dispatch);
	};

	return (
		<div className="login">
			<h1>Log In</h1>
			{error && <h2>{error}</h2>}
			{isLoading && <h2>Checking User</h2>}
			<form onSubmit={handleSubmit(login)}>
				<label>
					Email
					<input
						type="email"
						name="email"
						{...register("email", {
							required: "Introduce an email",
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
								message: "The email does not exist",
							},
						})}
					/>
				</label>
				{errors.email ? (
					<>
						{errors.email.type === "required" && <p>{errors.email.message}</p>}
						{errors.email.type === "pattern" && <p>{errors.email.message}</p>}
					</>
				) : null}

				<label>
					Password
					<input
						type="password"
						name="password"
						{...register("password", {
							required: "Introduce a password",
							pattern: {
								value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/,
								message: "The password is incorrect",
							},
						})}
					/>
				</label>
				{errors.password ? (
					<>
						{errors.password.type === "required" && <p>{errors.password.message}</p>}
						{errors.password.type === "pattern" && <p>{errors.password.message}</p>}
					</>
				) : null}
				{/* <label>
        Repeat password
        <input type='password'/>
      </label> */}
				<button>Submit</button>
			</form>
		</div>
	);
};

export default Login;
