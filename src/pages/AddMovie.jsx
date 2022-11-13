import './styles/AddMovie.scss'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import Movie from '../components/Movie';
import { postMovie } from '../redux/movies/movies.functions';

const AddMovie = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const {movies, error} = useSelector(state => state.movies)

  const addMovie = (formdata) => {

    formdata.img = formdata.img[0]
    
    /* const formData = new FormData();
    formData.append("title", datosFormulario.title);
    formData.append("description", datosFormulario.description);
    formData.append("year", datosFormulario.year);
    formData.append("director", datosFormulario.director);
    formData.append("img", datosFormulario.img[0]); */

    postMovie(formdata, dispatch)
  };

  return (
    <div className="addMovie">
      <h1>Add movie</h1>
      <form onSubmit={handleSubmit(addMovie)}>
        <label>
          Title
          <input
            type="title"
            name="title"
            {...register("title", {
              required: "Introduce an title"
            })}
          />
        </label>
        {errors.title && <p>{errors.title.message}</p>}
        <label>
          Image
          <input
            type="file"
            name="img"
            {...register("img", {
              required: "Introduce an image"
            })}
          />
        </label>
        {errors.title && <p>{errors.title.message}</p>}
        <label>
          Description
          <input
            type="text"
            name="description"
            {...register("description")}
          />
        </label>
        <label>
          Year
          <input
            type="number"
            name="year"
            {...register("year")}
          />
        </label>
        <label>
          Director
          <input
            type="text"
            name="director"
            {...register("director")}
          />
        </label>
        <button>Submit</button>
      </form>
      <p>{movies.title}</p>
    </div>
  );
};
export default AddMovie