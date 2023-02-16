import styled from 'styled-components'

const AppContainer = styled.div`
#root {
  max-width: 1280px;
  min-width: 90%;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
}
`;


const Welcome = styled.div`
    text-align: left;
    margin-bottom: 1em;
    border-bottom: 3px solid #B0B0B0;

    button {
        margin-bottom: 1em;
        background-color: #EAB023;
        padding: 0.4em 2em;
        border: none;

        &:hover {
        cursor: pointer;
    }
}
`;

export { AppContainer, Welcome }