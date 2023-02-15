import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

function NavBar() {

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <NavContainer >
      <h1><NavLink to="/">EZ SHOPPING</NavLink></h1>
      <div>
        <NavLink to="/user">🤓 Homer</NavLink>
        <NavLink to="/basket">🛒 Basket</NavLink>
        <a onClick={toggleTheme}>⚫ Dark mode</a>
        {/* <a className="${theme}" onClick={toggleTheme}>{theme === light ? '⚫ Dark mode' : '🟠 Light mode'} </a> */}
      </div>
    </NavContainer>
  )
}



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
      font-weight: bold;

    &:hover {
      cursor: pointer;
    }
    }
`;

export default NavBar
