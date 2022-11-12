import axios from "axios";

export const getMovies = async (dispatch) => {
    try {

      dispatch({type: 'gettingMovies'});
      const res = await axios.get("http://localhost:3000/movies");

      dispatch({type: 'getMovies', payload: res.data});
      
    } catch (error) {
      dispatch({type: 'errorMovies', payload: error.message})
    }
};