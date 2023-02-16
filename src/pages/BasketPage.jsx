import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clearBasket } from '../store/basketSlice'
import Card from '../components/Card'
import Welcome from '../styles/BasketPageStyled'

function BasketPage() {

    const dispatch = useDispatch()
    const basketProducts = useSelector(state => state.basket.basket)
    return (
        <div>
            <Welcome>
                <h1>Hi Homer !</h1>
                <p>There are {basketProducts.length} items in your basket</p>
                <button onClick={() => dispatch(clearBasket())}>Clear basket</button>
            </Welcome>
            {basketProducts && (
                basketProducts.map((product, index) =>
                    <Card key={index} product={product} />
                )
            )}
        </div>
    )
}

export default BasketPage
