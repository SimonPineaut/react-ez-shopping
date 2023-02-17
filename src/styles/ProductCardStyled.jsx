import styled from 'styled-components'

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 4em;
    margin-bottom: 3em;

    .imageContainer {
      display: flex;
      justify-content: center;
      align-items: flex-start;

      img {
        max-width: 250px;
      }
    }

    .textContainer {
      text-align: left;

      h3 {
        margin: 0 0 1em 1em;
        font-weight: bold;
      }

      p {
        margin: 1em ;
      }

      span {
        font-weight: bold;
        margin: 1em 0 2em 1em ;
}

      input {
        width: 40px;
        text-align: center;
      }

      button {
        width: 40%;
        background-color: #EAB023;
        padding: 0.4em;
        margin: 1em 0 0 1em;
        border: none;

        &:hover {
          cursor: pointer;
        }
      }
    }
`;

export default Grid