import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Movie from "../components/Movie";
import { getMovies } from "../redux/movies/movies.functions";

const Search = () => {
  const dispatch = useDispatch();
  const { movies, isLoading, search, error, moviesGotten } = useSelector(
    (state) => state.movies
  );
  
  useEffect(() => {
    !moviesGotten && getMovies(dispatch);
  }, [])

  return (
    <div className="search">
      <input
        type="text"
        onKeyUp={(e) =>
          dispatch({
            type: "searchMovies",
            payload: e.target.value.toLowerCase(),
          })
        }
        placeholder="Search movie"
      />
      {isLoading && <h2>Loading movies...</h2>}
      {error && <h2>{error}</h2>}
      {movies.length > 0 && (
        <div className="divPelis">
          {movies.map((movie) => {
            return movie.title.toLowerCase().includes(search) && (
              <Movie key={JSON.stringify(movie)} movie={movie} cartUp={true}/>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Search;
