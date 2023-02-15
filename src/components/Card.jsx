import React from 'react'
import { useSelector } from 'react-redux'
import Grid from '../styles/CardStyled'

// const state = useSelector(state => state)
// console.log(state);

function Card() {
  return (
    <Grid>
      <div className="imageContainer">
        <img src="images.jpeg" alt="" />
      </div>
      <div className="textContainer">
        <h3>titre</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium similique placeat iste accusantium ipsam iusto sint culpa quis quam quae, dolorum pariatur maxime voluptatum ratione?</p>
        <span>25$</span>
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

