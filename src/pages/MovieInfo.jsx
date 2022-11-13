import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import GenericButton from "../components/GenericButton";

const MovieInfo = () => {
	const { title } = useParams();
	const { movies } = useSelector((state) => state.movies);
	const { token } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	let movie;

	movies.map((mov) => (movie = mov.title === title ? mov : movie));

	return (
		<div>
			<p>{movie.title}</p>
			<img src={movie.img} alt={movie.title} style={{ width: "300px" }} />
			{token && !movie.inCart && (
				<GenericButton
					func={() => {
						dispatch({ type: "addMovie", payload: movie });
						movie.inCart = true;
						navigate("");
					}}
					text="Add to cart"
					size="s"
					borderRadius="4px"
				/>
			)}
			{token && movie.inCart && (
				<GenericButton
					func={() => {
						dispatch({ type: "removeMovie", payload: movie });
						movie.inCart = false;
						navigate("");
					}}
					text="Remove from cart"
					size="s"
					borderRadius="4px"
				/>
			)}
		</div>
	);
};

export default MovieInfo;
