import { applyMiddleware, combineReducers, createStore} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import moviesReducer from "./movies/movies.reduce";

const rootReducer = combineReducers({
    movies: moviesReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store