import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "../components/Movie";

const Search = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getMovies = async () => {
      const res = await axios.get("http://localhost:3000/movies");

      setMovies(res.data);
    };
    getMovies();
  }, []);

  console.log(search);

  return (
    <div className="search">
      <input
        type="text"
        onKeyUp={(e) => setSearch(e.target.value.toLowerCase())}
        placeholder="Busqueda de películas"
      />
      {movies.length > 0 &&
        movies.map((movie) => <Movie key={JSON.stringify(movie)} movie={movie} search={search}/>)}
    </div>
  );
};

export default Search;
