import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import GenericButton from '../components/GenericButton'
import Movie from '../components/Movie'

const Cart = () => {

  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()

  return (
    <div>
      <GenericButton text="Remove all" size="s" func={() => dispatch({type: "removeAll"})} borderRadius="7px"/>
      {cart.map(movie => <Movie key={JSON.stringify(movie)} movie={movie} cartDown={true}/>)}
    </div>
  )
}

export default Cart