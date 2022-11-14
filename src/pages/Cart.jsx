import "./styles/Cart.scss";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import GenericButton from "../components/GenericButton";
import Movie from "../components/Movie";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="cart">
      <div className="container">
        <GenericButton
          text="Remove all"
          size="s"
          padding="20px"
          func={() => dispatch({ type: "removeAll" })}
          borderRadius="7px"
          pad="10px"
        />
        <div className="movies-cart">
          {cart.map((movie) => (
            <Movie key={JSON.stringify(movie)} movie={movie} cartDown={true} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
