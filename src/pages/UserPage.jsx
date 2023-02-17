import React from 'react'
import { useSelector } from 'react-redux'
import Form from '../components/Form'
import Titles from '../styles/FormStyled'

function UserPage() {
    const userName = useSelector(state => state.user.firstname)

    return (
        <div>
            <Titles>
                <h2>Hi {userName} !</h2>
                <h3>Customize your profile here</h3>
            </Titles>
            <Form />
        </div >
    )
}

export default UserPage
