import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import GenericButton from "./GenericButton";

const AddRemoveButton = ({movie}) => {

    const {token} = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

	return (
		<>
			{token && !movie.inCart && (
				<GenericButton
					func={() => {
						dispatch({ type: "addMovie", payload: movie });
						movie.inCart = true;
						navigate("");
					}}
					text="Add to cart"
					size="s"
					borderRadius="4px"
				/>
			)}
			{token && movie.inCart && (
				<GenericButton
					func={() => {
						dispatch({ type: "removeMovie", payload: movie });
						movie.inCart = false;
						navigate("");
					}}
					text="Remove from cart"
					size="s"
					borderRadius="4px"
				/>
			)}
		</>
	);
};

export default AddRemoveButton;
