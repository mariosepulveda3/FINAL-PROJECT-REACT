import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import GenericButton from "../components/GenericButton";
import { putMovie } from "../redux/movies/movies.functions";

const EditMovie = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const dispatch = useDispatch();
	const { movies, error, isLoading } = useSelector((state) => state.movies);

	const editMovie = (formdata) => {
		formdata.img = formdata.img[0];

		putMovie(formdata, movies, dispatch);
	};

	return (
		<div className="mainContainer page">
			<div className="formContainer">
				{error && <h2 className="error">{error}</h2>}
				{isLoading && <h2 className="loading">Editing movie...</h2>}
				<h1>Edit Movie</h1>
				<form onSubmit={handleSubmit(editMovie)}>
					<select name="_id" {...register("_id")}>
						{movies.map((movie) => (
							<option key={JSON.stringify(movie)} value={movie._id}>
								{movie.title}
							</option>
						))}
					</select>
					<label>
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
					<GenericButton
						text="Edit"
						bgColor="rgba(0, 0, 0, 0.676)"
						textColor="whitesmoke"
						size="m"
						borderRadius="10px"
					/>
				</form>
			</div>
		</div>
	);
};

export default EditMovie;
