import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore,  applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import reducers from './reducers/tabs.js'
import App from './components/App'
import initialState from './tabsInfo'
import styles from './styles/style.css'

let loggerMiddleware = createLogger();

let store = createStore(
	reducers, 
	initialState,
	applyMiddleware(
		thunkMiddleware, // lets us dispatch() functions
	    loggerMiddleware // neat middleware that logs actions
	)
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
