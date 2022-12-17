import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducer/index.js'
import thunk from 'redux-thunk'

const Store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

export default Store;