import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchProducts } from '../store/productSlice'
import ProductCards from '../components/ProductCards'

function HomePage() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return (
        <div>
            <ProductCards />
        </div>
    )
}

export default HomePage
