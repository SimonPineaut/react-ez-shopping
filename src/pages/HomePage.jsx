import React from 'react'
import { useDispatch } from 'react-redux';
import Cards from '../components/Cards'


function HomePage() {
    const dispatch = useDispatch()
    return (
        <div>
            <Cards />
            <button onClick={() => dispatch(fetchProductsAPI())}>fetch</button>
        </div>
    )
}

const fetchProductsAPI = () => {
    fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((response) => { console.log(response) });
}

export default HomePage
