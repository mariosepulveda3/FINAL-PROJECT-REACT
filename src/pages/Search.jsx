import axios from "axios";
import React, { useEffect, useState } from "react";

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
        movies.map((movie) => {
          if (movie.title.toLowerCase().includes(search)) {
            return (
              <div key={JSON.stringify(movie)} className="movie">
                <p>{movie.title}</p>
                <img
                  src={movie.img}
                  alt={movie.title}
                  referrerPolicy="no-referrer"
                />
              </div>
            );
          } else {
            return null;
          }
        }
        )}
    </div>
  );
};

export default Search;
