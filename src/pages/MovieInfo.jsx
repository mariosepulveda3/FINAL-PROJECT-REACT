import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AddRemoveButton from "../components/AddRemoveButton";

const MovieInfo = () => {
	const { title } = useParams();
	const { movies } = useSelector((state) => state.movies);

	let movie;

	movies.map((mov) => (movie = mov.title === title ? mov : movie));

	return (
		<div>
			<p>{movie.title}</p>
			<img src={movie.img} alt={movie.title} style={{ width: "300px" }} />
			<AddRemoveButton movie={movie} />
		</div>
	);
};

export default MovieInfo;
