import styled from 'styled-components'



const NavContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1em;
    padding: 1em;
    background-color: #EAB023;

    h1 {
      margin: 0 0;
    }

    a {
      margin: 0 1em;
      text-decoration: none;
      color: black;

      &:hover {
        cursor: pointer;
      }
    }
`;

export default NavContainer