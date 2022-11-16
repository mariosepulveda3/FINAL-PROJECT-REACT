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
      <Link to={`/${movie.title}`}>
        <GenericButton text="See more" size="s" borderRadius="4px" />
      </Link>
      <AddRemoveButton movie={movie} />
    </div>
  );
};

export default Movie;
