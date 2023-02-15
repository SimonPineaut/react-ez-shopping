import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import NavContainer from '../styles/NavBarStyled'

function NavBar() {

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  };

  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.body.className = theme
  }, [theme])

  let darkModeEnabled = (theme) => {
    return theme === 'light' ? '⚫ Dark mode' : '⚪ Light mode'
  }

  return (
    <NavContainer >
      <h1><NavLink to="/">EZ SHOPPING</NavLink></h1>
      <div>
        <NavLink to="/user">🤓 Homer</NavLink>
        <NavLink to="/basket">🛒 Basket</NavLink>
        <a onClick={toggleTheme}>{darkModeEnabled(theme)}</a>
        {/* <a className="${theme}" onClick={toggleTheme}>{} </a> */}
      </div>
    </NavContainer>
  )
}



export default NavBar
