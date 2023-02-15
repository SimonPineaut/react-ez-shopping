import React from 'react'
import Cards from '../components/Cards'

const fetchProductsAPI = () => {
    fetch("https://reqres.in/api/users").then((response) => response.json());
    console.log(response);
}

function HomePage() {
    return (
        <div>
            <Cards />
        </div>
    )
}

export default HomePage
