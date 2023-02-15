import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import AppContainer from './styles/MainStyled'
// import Store from '@reduxjs/toolkit'


ReactDOM.createRoot(document.getElementById('root')).render(

  // <Provider store={Store}>
  <AppContainer>
    <App />
  </AppContainer>

  /* </Provider> */
)
