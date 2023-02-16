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
      margin: 0 0 .5em 0;
      font-weight: bold;
    }

    p {
      margin: 0 0 .2em 0;
    }

    span, label {
      font-weight: bold;
    }

    input {
      width: 7%;
      margin: .5em;
    }

    button {
      width: 40%;
      background-color: #EAB023;
      padding: 0.4em;
      border: none;

      &:hover {
        cursor: pointer;
      }
    }
    }
`;

export default Grid