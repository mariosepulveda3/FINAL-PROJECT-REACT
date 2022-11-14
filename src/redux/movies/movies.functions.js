import { API, API2 } from "../../shared/services/api";

export const getMovies = async (dispatch) => {
	try {
		dispatch({ type: "gettingMovies" });
		const res = await API.get("/movies");

		res.data.map((movie) => (movie.inCart = false));
		dispatch({ type: "getMovies", payload: res.data });
	} catch (error) {
		dispatch({ type: "errorMovies", payload: error.response.data });
	}
};

export const postMovie = async (formdata, movies, dispatch) => {
	try {
		
		dispatch({ type: "postingMovies" });
		const res = await API2.post("/movies/create", formdata);
		res.data.inCart = false;
		movies.push(res.data)
		dispatch({ type: "postMovies", payload: movies });
	} catch (error) {
		console.log(error);
		dispatch({ type: "errorPostMovies", payload: error.response.data });
	}
};
