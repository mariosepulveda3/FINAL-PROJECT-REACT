const INITIAL_STATE = {
    movies: [],
    isLoading: false,
    error: false,
    search: "",
    moviesGotten: false
}

const moviesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'gettingMovies':
            return {...state, isLoading : true};
        
        case 'getMovies':
            return {...state, isLoading: false, movies: action.payload, error: false, moviesGotten: true};
            
        case 'errorMovies':
            return {...state, isLoading: false, movies: [], error: action.payload};
            

        case 'searchMovies':
            return {...state, search: action.payload}

        
        case 'postingMovies':
            return {...state, isLoading : true};
        
        case 'postMovies':
            return {...state, isLoading: false, movies: action.payload, error: false};
        
        case 'errorPostMovies':
            return {...state, isLoading: false, movies: [], error: action.payload};
        
        
        default:
            return state;
    }
}

export default moviesReducer;