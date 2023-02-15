import styled from "styled-components";

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

export default InputContainer