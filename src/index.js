import React from 'react'
import ReactDOM from 'react-dom'
import App from './app.js'
import { Provider } from 'react-redux'
import Store from './redux/store/index.js'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <Provider store={Store}>
            <App />
        </Provider>
    </React.StrictMode>
)