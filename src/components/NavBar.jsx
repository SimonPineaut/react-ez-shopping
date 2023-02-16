import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import NavContainer from '../styles/NavBarStyled'
import '../app.css'

function NavBar() {
  const state = useSelector(state => state.basket.basket)
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
        <NavLink to="/basket">🛒 <strong>{state.length}</strong> Basket</NavLink>
        <a onClick={toggleTheme}>{darkModeEnabled(theme)}</a>
      </div>
    </NavContainer>
  )
}



export default NavBar
