import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart, removeFromCart } from "../redux/cart/cart.functions";
import GenericButton from "./GenericButton";

const AddRemoveButton = ({movie}) => {

    const {token} = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

	return (
		<>
			{token && !movie.inCart && (
				<GenericButton
					func={() => addToCart(movie, navigate, dispatch)}
					text="Add to cart"
					size="s"
					borderRadius="4px"
				/>
			)}
			{token && movie.inCart && (
				<GenericButton
					func={() => removeFromCart(movie, navigate, dispatch)}
					text="Remove from cart"
					size="s"
					borderRadius="4px"
				/>
			)}
		</>
	);
};

export default AddRemoveButton;
