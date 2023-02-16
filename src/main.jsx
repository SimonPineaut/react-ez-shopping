import React from 'react'
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client'
import App from './App'
import { AppContainer } from './styles/MainStyled'
import store from './store/index'

ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    <AppContainer>
      <App />
    </AppContainer>
  </Provider>
)