import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMovie } from '../redux/movies/movies.functions';

const DeleteMovie = () => {
    const {
        register,
        handleSubmit,
      } = useForm();
      const dispatch = useDispatch();
      const { movies, error } = useSelector((state) => state.movies);
    
      const removeMovie = (formdata) => {
        deleteMovie(formdata, movies, dispatch);
      };
  return (
    <div className='page'>
        <form onSubmit={handleSubmit(removeMovie)}>
        <h1>Delete Movie</h1>
          <select name="_id" {...register("_id")} >
            {movies.map(movie => <option key={JSON.stringify(movie)} value={movie._id}>{movie.title}</option>)}
          </select>
        <button>Delete</button>
      </form>
    </div>
  )
}

export default DeleteMovie