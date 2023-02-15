import React from 'react'
import Card from '../components/Card'
import styled from 'styled-components'

function Cards() {
  return (
    <Grid>
      <Card />
      <Card />
      <Card />
      <Card />
    </Grid>
  )
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
`;

export default Cards
