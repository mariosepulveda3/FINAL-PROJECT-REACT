import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Movie from "../components/Movie";

const Search = () => {
  const dispatch = useDispatch()
  const {movies, isLoading, search, error} = useSelector(state => state.movies)

  useEffect(() => {
    const getMovies = async () => {
      try {

        dispatch({type: 'gettingMovies'});
        const res = await axios.get("http://localhost:3000/movies");
  
        dispatch({type: 'getMovies', payload: res.data});
        
      } catch (error) {
        dispatch({type: 'errorMovies', payload: error.message})
      }
    };
    getMovies();
  }, []);

  return (
    <div className="search">
      <input
        type="text"
        onKeyUp={(e) => dispatch({type: 'searchMovies', payload: e.target.value.toLowerCase()})}
        placeholder="Search movie"
      />
      {isLoading && (<h2>Loading movies...</h2>)}
      {error && (<h2>{error}</h2>)}
      {movies.length > 0 &&
        <div className="divPelis">
          {movies.map((movie) => <Movie key={JSON.stringify(movie)} movie={movie} search={search}/>)}
        </div>}
    </div>
  );
};

export default Search;
