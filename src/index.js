import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import store from './redux/store'
import { Provider } from 'react-redux'

//! Nuevo
/* const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
/*   <React.StrictMode>
 */ 
  /* </React.StrictMode> */


//! Antiguo
ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>,
  document.getElementById('root')
)
