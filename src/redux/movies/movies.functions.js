import axios from "axios";
import { API } from "../../shared/services/api";

export const getMovies = async (dispatch) => {
    try {

      dispatch({type: 'gettingMovies'});
      const res = await axios.get("http://localhost:3000/movies");

      res.data.map(movie => movie.inCart = false)
      dispatch({type: 'getMovies', payload: res.data});
      
    } catch (error) {
      dispatch({type: 'errorMovies', payload: error.response.data})
    }
};

export const postMovie = async (formdata, dispatch) => {
  try {
    console.log(formdata);
    dispatch({type: 'postingMovies'});
    const res = await API.post("/movies/create", formdata);
    console.log(res);
    dispatch({type: 'postMovies', payload: res.data});
    
  } catch (error) {
    console.log(error);
    dispatch({type: 'errorPostMovies', payload: error.response.data})
  }
};