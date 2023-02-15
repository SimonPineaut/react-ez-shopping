import React from 'react'
import Form from '../components/Form'
import Titles from '../styles/FormStyled'

function UserPage() {
    return (
        <div>
            <Titles>
                <h2>Hi Homer !</h2>
                <h3>Customize your profile here</h3>
            </Titles>
            <Form />
        </div >
    )
}

export default UserPage
