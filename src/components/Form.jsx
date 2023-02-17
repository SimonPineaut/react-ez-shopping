import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../store/userSlice';
import InputContainer from '../styles/FormStyled'

const Form = () => {
    const dispatch = useDispatch()

    const [inputFirstnameValue, setInputFirstnameValue] = useState("");
    const [inputLastnameValue, setInputLastnameValue] = useState("");
    const [inputEmailValue, setInputEmailValue] = useState("");

    let user = {
        firstname: inputFirstnameValue,
        lastname: inputLastnameValue,
        email: inputEmailValue
    }

    return (
        <div>
            <InputContainer>
                <div>
                    <label>Your firstname :</label>
                    <input
                        type="text"
                        value={inputFirstnameValue}
                        onChange={(e) => setInputFirstnameValue(e.target.value)}
                    />
                </div>
                <div>
                    <label>Your lastname :</label>
                    <input
                        type="text"
                        value={inputLastnameValue}
                        onChange={(e) => setInputLastnameValue(e.target.value)}
                    />
                </div>
                <div>
                    <label>Your email :</label>
                    <input
                        type="text"
                        value={inputEmailValue}
                        onChange={(e) => setInputEmailValue(e.target.value)}
                    />
                </div>
                <button onClick={() => dispatch(createUser(user))}>Save account</button>
            </InputContainer>
        </div>
    );
};

export default Form;