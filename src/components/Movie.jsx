import React from "react";

const Movie = ({ movie }) => {
  return (
    <div className="movie">
      {
        <div className="container">
          <p>{movie.title}</p>
          <img src={movie.img} alt={movie.title} referrerPolicy="no-referrer" />
        </div>
      }
    </div>
  );
};

export default Movie;
