import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../components/Card'
import Grid from '../styles/CardsStyled'

function Cards() {
  const products = useSelector(state => state.product.products)
  return (
    <Grid>
      {products && (
        products.map((product, index) =>
          <Card key={index} product={product} />
        )
      )}
    </Grid>
  )
}

export default Cards
