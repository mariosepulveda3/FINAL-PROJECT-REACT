const INITIAL_STATE = {
    movies: [],
    isLoading: false,
    error: false,
    search: ""
}

const moviesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'gettingMovies':
            return {...state, isLoading : true};
        
        case 'getMovies':
            return {...state, isLoading: false, movies: action.payload, error: false};
        
        case 'searchMovies':
            return {...state, search: action.payload}

        case 'errorMovies':
            return {...state, isLoading: false, movies: [], error: action.payload};

        default:
            return state;
    }
}

export default moviesReducer;