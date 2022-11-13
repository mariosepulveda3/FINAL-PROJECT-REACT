import { applyMiddleware, combineReducers, createStore} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import authReducer from "./auth/auth.reducer";
import cartReducer from "./cart/cart.reducer";
import moviesReducer from "./movies/movies.reduce";

const rootReducer = combineReducers({
    movies: moviesReducer,
    auth: authReducer,
    cart: cartReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store