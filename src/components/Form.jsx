import React from 'react';
import InputContainer from '../styles/FormStyled'

const Form = () => {
    return (
        <div>
            <InputContainer>
                <div>
                    <label htmlFor="">Your firstname :</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">Your lastname :</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">Your email :</label>
                    <input type="text" />
                </div>
                <button>Save</button>
            </InputContainer>
        </div>
    );
};

export default Form;