import "./styles/Movie.scss";
import React from "react";
import { Link } from "react-router-dom";
import AddRemoveButton from "./AddRemoveButton";
import GenericButton from "./GenericButton";

const Movie = ({ movie }) => {
	return (
		<div className="movie">
			<div className="title">
				<h4>{movie.title}</h4>

			</div>
			<img src={movie.img} alt={movie.title} referrerPolicy="no-referrer" />
			<AddRemoveButton movie={movie} />
			<GenericButton text={<Link to={`/${movie.title}`}>See more</Link>} size="s" borderRadius="4px" />
		</div>
	);
};

export default Movie;
