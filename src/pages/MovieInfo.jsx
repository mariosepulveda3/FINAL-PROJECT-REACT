import "./styles/MovieInfo.scss";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import AddRemoveButton from "../components/AddRemoveButton";
import GenericButton from "../components/GenericButton";

const MovieInfo = () => {
  const { title } = useParams();
  const { movies } = useSelector((state) => state.movies);

  let movie;

  movies.map((mov) => (movie = mov.title === title ? mov : movie));

  return (
    <div className="movie-info page">
      <div className="container">
        <div className="title-image">
          <h3>{movie.title}</h3>
          <img src={movie.img} alt={movie.title} style={{ width: "250px" }} />
        </div>
        <div className="info">
          <h4>Description:</h4>
          <p>{movie.description}</p>
          <div className="year-director">
            <h4>Year:</h4>
            <p>{movie.year}</p>
          </div>
          <div className="year-director">
            <h4>Director:</h4>
            <p>{movie.director}</p>
          </div>
          <div className="buttons">
            <Link to={'/'}>
              <GenericButton text="All movies" size="s" borderRadius="4px" />
            </Link>
            <AddRemoveButton movie={movie} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
