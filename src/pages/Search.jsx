import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Movie from "../components/Movie";

const Search = () => {
  const dispatch = useDispatch()
  const {movies, isLoading, search, error} = useSelector(state => state.movies)

  useEffect(() => {
    const getMovies = async () => {
      dispatch({type: 'gettingMovies'});
      const res = await axios.get("http://localhost:3000/movies");

      dispatch({type: 'getMovies', payload: res.data});
    };
    getMovies();
  }, []);

  console.log(search);

  return (
    <div className="search">
      <input
        type="text"
        onKeyUp={(e) => dispatch({type: 'getMovies', payload: e.target.value.toLowerCase() })}
        placeholder="Busqueda de películas"
      />
      {movies.length > 0 &&
        movies.map((movie) => <Movie key={JSON.stringify(movie)} movie={movie} search={search}/>)}
    </div>
  );
};

export default Search;
