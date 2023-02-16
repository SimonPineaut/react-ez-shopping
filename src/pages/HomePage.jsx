import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchProducts } from '../store/productSlice'
import Cards from '../components/Cards'

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
