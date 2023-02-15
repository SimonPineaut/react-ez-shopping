import React from 'react'
import Card from '../components/Card'
import styled from 'styled-components'

const Welcome = styled.div`
    text-align: left;
    margin-bottom: 1em;
    border-bottom: 3px solid #B0B0B0;

    button {
        margin-bottom: 1em;
        background-color: #EAB023;
        padding: 0.4em 2em;
        border: none;

        &:hover {
        cursor: pointer;
    }
}
`;

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
