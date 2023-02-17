import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import Grid from '../styles/CardStyled'
import { addToBasket, removeFromBasket } from '../store/basketSlice'

function Card({ product }) {
  const dispatch = useDispatch()
  const location = useLocation();
  const basket = useSelector(state => state.basket.basket)
  const quantity = useSelector(state => state.basket.quantity)

  const [inputQuantityValue, setInputQuantityValue] = useState(1);
  const products = {
    item: product,
    quantity: inputQuantityValue
  }

  return (
    <Grid>
      <div className="imageContainer">
        <img src={product.image} alt="" />
      </div>
      <div className="textContainer">
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <span>$ {product.price}</span>
        <br />
        <br />
        <span>Quantity : </span>
        <input
          type="number"
          value={inputQuantityValue}
          onChange={(e) => setInputQuantityValue(e.target.value)}
        />
        <br />
        {location.pathname !== "/basket" && (
          <button onClick={() => dispatch(addToBasket(products))}>add to basket</button>
        )}
        {location.pathname === "/basket" && (
          <React.Fragment>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setInputQuantityValue(e.target.value)}
            />
            <button onClick={() => dispatch(removeFromBasket(product))}>remove from basket</button>
          </React.Fragment>
        )}
        {basket.includes(product) && location.pathname !== "/basket" && (
          <p>Already in basket : ✅</p>
        )}
      </div>
    </Grid>
  )
}

export default Card

