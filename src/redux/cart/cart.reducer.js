const INITIAL_STATE = [];

const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "addMovie":
			return [...state, action.payload];

		case "removeMovie":
			const index = state.indexOf(action.payload);
			state.splice(index, 1);
			return state;

		case "removeAll":
			state.map((movie) => (movie.inCart = false));
			return INITIAL_STATE;

		default:
			return state;
	}
};

export default cartReducer;
