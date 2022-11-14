import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { putMovie } from '../redux/movies/movies.functions';

const EditMovie = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const { movies, error } = useSelector((state) => state.movies);

  const editMovie = (formdata) => {
    formdata.img = formdata.img[0];

    putMovie(formdata, movies, dispatch);
  };

  return (
    <div className='page'>
      <form onSubmit={handleSubmit(editMovie)}>
        <h1>Edit Movie</h1>
        <label>
          <select name="_id" {...register("_id")} >
            {movies.map(movie => <option key={JSON.stringify(movie)} value={movie._id}>{movie.title}</option>)}
          </select>
          <p>Title</p>
          <input
            type="title"
            name="title"
            {...register("title", {
              required: "Introduce an title",
            })}
          />
        </label>
        {errors.title && <p>{errors.title.message}</p>}
        <label>
        <p>Image</p>
          <input
            type="file"
            title="dasasdasdsadasdasdasdsadasdasdasdasd"
            name="img"
            {...register("img", {
              required: "Introduce an image",
            })}
          />
        </label>
        {errors.title && <p>{errors.title.message}</p>}
        <label>
          <p>Description</p>
          <input type="text" name="description" {...register("description")} />
        </label>
        <label>
          <p>Year</p>
          <input type="number" name="year" {...register("year")} />
        </label>
        <label>
          <p>Director</p>
          <input type="text" name="director" {...register("director")} />
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default EditMovie