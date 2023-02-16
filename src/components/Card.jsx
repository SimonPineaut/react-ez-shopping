import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import Grid from '../styles/CardStyled'
import { addToBasket, removeFromBasket } from '../store/basketSlice'

function Card({ product }) {
  const dispatch = useDispatch()
  const location = useLocation();

  const [inputValue, setInputValue] = useState(1);
  return (
    <Grid>
      <div className="imageContainer">
        <img src={product.image} alt="" />
      </div>
      <div className="textContainer">
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <span>{product.price}$</span>
        <br />
        <label>Quantity : </label>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        {location.pathname !== "/basket" && (
          <button onClick={() => dispatch(addToBasket(product))}>add to basket</button>
        )}
        {location.pathname === "/basket" && (
          <button onClick={() => dispatch(removeFromBasket(product))}>remove from basket</button>
        )}
      </div>
    </Grid>
  )
}

export default Card

