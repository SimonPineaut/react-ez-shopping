import React from 'react'
import styled from 'styled-components'

function Card() {
  return (
    <Grid>
      <ImageContainer>
        <img src="images.jpeg" alt="" />
      </ImageContainer>
      <TextContainer>
        <h3>titre</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium similique placeat iste accusantium ipsam iusto sint culpa quis quam quae, dolorum pariatur maxime voluptatum ratione?</p>
        <span>25$</span>
        <form >
          <label>Quantity :</label>
          <input type="text" />
          <br />
          <button>Add to basket</button>
        </form>
      </TextContainer>
    </Grid>
  )
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 4em;
`;

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
`;

const TextContainer = styled.div`
    text-align: left;

    h3 {
      margin: 0 0 .5em 0;
      font-weight: bold;
    }

    p {
      margin: 0 0 .2em 0;
    }

    span, label {
      font-weight: bold;
    }

    input {
      width: 10%;
      margin: .5em;
    }

    button {
      width: 40%;
      background-color: #EAB023;
      padding: 0.4em;
      border: none;

      &:hover {
        cursor: pointer;
      }
    }
`;


export default Card

