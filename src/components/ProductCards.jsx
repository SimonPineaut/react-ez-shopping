import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard'
import Grid from '../styles/ProductCardsStyled'

function ProductCards() {
  const products = useSelector(state => state.product.products)
  return (
    <Grid>
      {products && (
        products.map((product, index) =>
          <ProductCard key={index} product={product} />
        )
      )}
    </Grid>
  )
}

export default ProductCards
