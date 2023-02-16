import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
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
                    <label htmlFor="">Your firstname :</label>
                    <input
                        type="text"
                        value={inputFirstnameValue}
                        onChange={(e) => setInputFirstnameValue(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="">Your lastname :</label>
                    <input
                        type="text"
                        value={inputLastnameValue}
                        onChange={(e) => setInputLastnameValue(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="">Your email :</label>
                    <input
                        type="email"
                        value={inputEmailValue}
                        onChange={(e) => setInputEmailValue(e.target.value)}
                    />
                </div>
                <button onClick={() => dispatch(createUser(user))}>Save</button>
            </InputContainer>
        </div>
    );
};

export default Form;