import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import NavContainer from '../styles/NavBarStyled'
import '../styles/app.css'

function NavBar() {
  const basket = useSelector(state => state.basket.basket)
  const quantity = basket.reduce((total, current) => {
    return total + current.quantity;
  }, 0)


  const firstname = useSelector(state => state.user.firstname)
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  };

  const darkModeEnabled = (theme) => {
    return theme === 'light' ? '⚫ Dark mode' : '⚪ Light mode'
  }

  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.body.className = theme
  }, [theme])

  return (
    <NavContainer >
      <h1><NavLink to="/">EZ SHOPPING</NavLink></h1>
      <div>
        <NavLink to="/user">🤓 {firstname || 'sign up here'}</NavLink>
        <NavLink to="/basket">🛒 <strong>{quantity}</strong> Basket</NavLink>
        <a onClick={toggleTheme}>{darkModeEnabled(theme)}</a>
      </div>
    </NavContainer>
  )
}



export default NavBar
