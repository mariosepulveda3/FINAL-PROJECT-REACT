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
		movies.push(res.data);
		dispatch({ type: "postMovies", payload: movies });
	} catch (error) {
		console.log(error);
		dispatch({ type: "errorPostMovies", payload: error.response.data });
	}
};

export const putMovie = async (formdata, movies, dispatch) => {
	try {
		dispatch({ type: "puttingMovies" });
		await API2.put(`/movies/edit/${formdata._id}`, formdata);
		const res = await API.get(`/movies/id/${formdata._id}`);
		const newMovies = [];
		movies.forEach((mov) => {
			newMovies.push(
				mov._id === res.data._id
					? {
							...mov,
							_id: res.data._id,
							title: res.data.title,
							img: res.data.img,
							description: res.data.description,
							year: res.data.year,
							director: res.data.director,
					  }
					: mov
			);
		});
		dispatch({ type: "putMovies", payload: newMovies });
	} catch (error) {
		console.log(error);
		dispatch({ type: "errorPutMovies", payload: error.response.data });
	}
};

export const deleteMovie = async (formdata, movies, dispatch) => {
	try {
		dispatch({ type: "deletingMovies" });
		await API2.delete(`/movies/delete/${formdata._id}`);
		const newMovies = [];
		movies.forEach((mov) => {
			if (!(mov._id === formdata._id)) {
				newMovies.push(mov);
			}
		});
		dispatch({ type: "deleteMovies", payload: newMovies });
	} catch (error) {
		console.log(error);
		dispatch({ type: "errorDeleteMovies", payload: error.response.data });
	}
};
