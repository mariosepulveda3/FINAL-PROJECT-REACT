import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Movie from "../components/Movie";
import { getMovies } from "../redux/movies/movies.functions";

const Search = () => {
  const dispatch = useDispatch()
  const {movies, isLoading, search, error} = useSelector(state => state.movies)

  useEffect(() => {
    getMovies(dispatch);
  }, []);

  return (
    <div className="search">
      <input
        type="text"
        onKeyUp={(e) => dispatch({type: 'searchMovies', payload: e.target.value.toLowerCase()})}
        placeholder="Busqueda de películas"
      />
      {isLoading && (<h2>Cargando películas</h2>)}
      {error && (<h2>{error}</h2>)}
      {movies.length > 0 &&
        movies.map((movie) => <Movie key={JSON.stringify(movie)} movie={movie} search={search}/>)}
    </div>
  );
};

export default Search;
