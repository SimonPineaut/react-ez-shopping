import React from 'react'
import Grid from '../styles/CardStyled'

function Card({ product }) {
  return (
    <Grid>
      <div className="imageContainer">
        <img src={product.image} alt="" />
      </div>
      <div className="textContainer">
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <span>{product.price}$</span>
        <form >
          <label>Quantity :</label>
          <input type="text" />
          <br />
          <button>Add to basket</button>
        </form>
      </div>
    </Grid>
  )
}

export default Card

