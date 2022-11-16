import "./styles/Home.scss";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Movie from "../components/Movie";
import { getMovies } from "../redux/movies/movies.functions";

const Home = () => {
	const dispatch = useDispatch();
	const { movies, isLoading, search, error, moviesGotten } = useSelector((state) => state.movies);

	useEffect(() => {
		!moviesGotten && getMovies(dispatch);
		dispatch({
			type: "searchMovies",
			payload: "",
		});
	}, []);

	return (
		<div className="search page">
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
			{/* {isLoading && <h2>Loading movies...</h2>} */}
			{/* {isLoading && <img src="https://i.stack.imgur.com/hzk6C.gif" alt="loading-gif"/>} */}
			{error && <h2>{error}</h2>}
			{movies.length > 0 && (
				<div className="container">
					{movies.map((movie) => {
						return (
							(movie.title.toLowerCase().includes(search) 
							||movie.director.toLowerCase().includes(search)
							|| String(movie.year).includes(search)) && (
								<Movie key={JSON.stringify(movie)} movie={movie} cartUp={true} />
							)
						);
					})}
				</div>
			)}
		</div>
	);
};

export default Home;
