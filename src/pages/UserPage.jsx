import React from 'react'
import styled from 'styled-components'

const Titles = styled.div`
    text-align: left;
`;

const InputContainer = styled.div`
    text-align: left;

    div {
        margin: 1em ;

        label {
            margin-right: 1em;
        }
    }

    button {
        background-color: #EAB023;
        width: 10%;
        margin-left: 1.5em;
        padding: 0.5em;
        border: none;

    &:hover {
    cursor: pointer;
    }
}
`;

function UserPage() {
    return (
        <div>
            <Titles>
                <h2>Hi Homer !</h2>
                <h3>Customize your profile here</h3>
            </Titles>
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
        </div >
    )
}

export default UserPage
