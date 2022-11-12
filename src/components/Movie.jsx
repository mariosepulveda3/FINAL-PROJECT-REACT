import React from "react";

const Movie = ({ movie, search }) => {
  return (
    <div className="movie">
      {movie.title.toLowerCase().includes(search) ? (
        <div className="container">
          <p>{movie.title}</p>
          <img src={movie.img} alt={movie.title} referrerPolicy="no-referrer" />
        </div>
      ) : null}
    </div>
  );
};

export default Movie;
