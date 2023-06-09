import { createStore, applyMiddleware, compose } from 'redux' // Para traer el Store de redux
import thunkMiddleware from 'redux-thunk' // permite conectar nuestro proyecto con la extensión del navegador
// el redux-thunk es un middleWare, que permite a nuestro código comunicarse con el servidor, ya que hablan diferentes idiomas
import reducer from './reducer' // importo la fx reducer

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // También permite que nuestro proyecto se conecte con la extensión del navegador

const store = createStore(
    reducer, // declaro la fx store y le paso por parámetro la fx reducer
    composeEnhancer(applyMiddleware(thunkMiddleware)) // le paso el parámetro para que funcione la extensión. Sirve para hacer peticiones a una api
)

export default store 