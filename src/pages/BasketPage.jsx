import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clearBasket } from '../store/basketSlice'
import Card from '../components/Card'
import Welcome from '../styles/BasketPageStyled'

function BasketPage() {
    const dispatch = useDispatch()
    const basketProducts = useSelector(state => state.basket.basket)
    const userName = useSelector(state => state.user.firstname)
    const totalPrice = basketProducts.reduce((total, current) => {
        return total + (current.price * current.quantity);
    }, 0)

    return (
        <div>
            <Welcome>
                <h1>Hi {userName} !</h1>
                <p>There are {basketProducts.length} items in your basket</p>
                <div className='basket-buttons-container'>
                    <button onClick={() => dispatch(clearBasket())}>Clear basket</button>
                    {basketProducts.length !== 0 && (
                        <div>
                            <span className='total-price'>Total : {totalPrice.toFixed(2)}$</span>
                            <button onClick={() => dispatch(clearBasket())}>Validate basket</button>
                        </div>
                    )}
                </div>
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
