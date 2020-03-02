import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './components/App'
import './index.sass'
import rootReducer from './reducers'

const store = createStore(rootReducer)

render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
)