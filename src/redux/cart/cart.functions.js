export const addToCart = (movie, navigate, dispatch) => {
	dispatch({ type: "addMovie", payload: movie });
	movie.inCart = true;
	navigate("");
};

export const removeFromCart = (movie, navigate, dispatch) => {
	dispatch({ type: "removeMovie", payload: movie });
	movie.inCart = false;
	navigate("");
};
