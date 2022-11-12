import Search from "../../pages/Search";

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
            console.log("The command does not exist");
            return state;
    }
}

export default moviesReducer;