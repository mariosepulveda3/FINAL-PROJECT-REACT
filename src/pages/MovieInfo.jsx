import "./styles/MovieInfo.scss";
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
    <div className="movie-info">
    <div className="container">
      <div className="title-image">
        <h3>{movie.title}</h3>
        <img src={movie.img} alt={movie.title} style={{ width: "250px" }} />
      </div>
      <div className="info">
        <h4>Description:</h4>
        <p>{movie.description}</p>
        <p>Year: {movie.year}</p>
        <p>Director: {movie.director}</p>
        <AddRemoveButton movie={movie} />
      </div>
    </div>
    </div>
  );
};

export default MovieInfo;
