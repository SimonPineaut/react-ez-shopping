import React from 'react'
import Cards from '../components/Cards'

const fetchProductsAPI = () => {
    fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((response) => { console.log(response) });
}

function HomePage() {
    return (
        <div>
            <Cards />
            <button onClick={fetchProductsAPI()}>fetch</button>
        </div>
    )
}

export default HomePage
