import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import GenericButton from "../components/GenericButton";
import { deleteMovie } from "../redux/movies/movies.functions";
import "./styles/MovieCRUD.scss";

const DeleteMovie = () => {
	const { register, handleSubmit } = useForm();
	const dispatch = useDispatch();
	const { movies, error, isLoading } = useSelector((state) => state.movies);

	const removeMovie = (formdata) => {
		deleteMovie(formdata, movies, dispatch);
	};
	return (
		<div className="mainContainer page">
			<div className="formContainer">
				{error && <h2 className="error">{error}</h2>}
				{isLoading && <h2 className="loading">Deleting movie...</h2>}
				<h1>Delete Movie</h1>
				<form onSubmit={handleSubmit(removeMovie)} className="deleteForm">
					<select name="_id" {...register("_id")}>
						{movies.map((movie) => (
							<option key={JSON.stringify(movie)} value={movie._id}>
								{movie.title}
							</option>
						))}
					</select>
					<GenericButton
						text="Delete"
						bgColor="rgba(0, 0, 0, 0.676)"
						textColor="whitesmoke"
						size="m"
						borderRadius="10px"
					/>
				</form>
			</div>
		</div>
	);
};

export default DeleteMovie;
