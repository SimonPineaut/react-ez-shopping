import React from 'react'
import Cards from '../components/Cards'


function HomePage() {
    return (
        <div>
            <Cards />
            <button onClick={() => fetchProductsAPI()}>fetch</button>
        </div>
    )
}

const fetchProductsAPI = () => {
    fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((response) => { console.log(response) });
}



export default HomePage
