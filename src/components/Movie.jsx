import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import GenericButton from "./GenericButton";

const Movie = ({ movie }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  return (
    <div className="movie">
      {
        <div className="container">
          <p>{movie.title}</p>
          <img src={movie.img} alt={movie.title} referrerPolicy="no-referrer" />
          {!movie.inCart && <GenericButton func={() => {
            dispatch({type: 'addMovie', payload: movie})
            movie.inCart = true
            navigate("")
          }} text="Add to cart" size="s" borderRadius="4px"/>}
          {movie.inCart && <GenericButton func={() => {
              dispatch({type: 'removeMovie', payload: movie})
              movie.inCart = false
              navigate("")
            }} text="Remove from cart" size="s" borderRadius="4px"/>}

        </div>
      }
    </div>
  );
};

export default Movie;
