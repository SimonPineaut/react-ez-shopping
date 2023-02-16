import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cards from '../components/Cards'
import { fetchProducts } from '../store/productSlice'

function HomePage() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return (
        <div>
            <Cards />
        </div>
    )
}

export default HomePage
