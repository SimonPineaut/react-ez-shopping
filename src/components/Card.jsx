import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Grid from '../styles/CardStyled'
import { addToBasket } from '../store/basketSlice'

function Card({ product }) {
  const dispatch = useDispatch()

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
        <br />
        <button onClick={() => dispatch(addToBasket(product))}>Add to basket</button>
      </div>
    </Grid>
  )
}

export default Card

