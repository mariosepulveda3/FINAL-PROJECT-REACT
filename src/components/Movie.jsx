import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import GenericButton from "./GenericButton";

const Movie = ({ movie }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {token} = useSelector(state => state.auth)
  
  return (
    <div className="movie">
      {
        <div className="container">
          <p>{movie.title}</p>
          <img src={movie.img} alt={movie.title} referrerPolicy="no-referrer" />
          {token && !movie.inCart && <GenericButton func={() => {
            dispatch({type: 'addMovie', payload: movie})
            movie.inCart = true
            navigate("")
          }} text="Add to cart" size="s" borderRadius="4px"/>}
          {token && movie.inCart && <GenericButton func={() => {
              dispatch({type: 'removeMovie', payload: movie})
              movie.inCart = false
              navigate("")
            }} text="Remove from cart" size="s" borderRadius="4px"/>}
          <GenericButton text={<Link to={`/${movie.title}`}>See more</Link>} size="s" borderRadius="4px" />
        </div>
      }
    </div>
  );
};

export default Movie;
