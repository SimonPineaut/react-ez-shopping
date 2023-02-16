import React from 'react'
import Card from '../components/Card'
import { Welcome } from '../styles/MainStyled'

function BasketPage() {
    return (
        <div>
            <Welcome>
                <h1>Hi Homer !</h1>
                <p>There are 2 items in your basket</p>
                <button>Clear basket</button>
            </Welcome>
            <Card />
        </div>
    )
}

export default BasketPage
