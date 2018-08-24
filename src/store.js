import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'

import MiscReducer from './redux/misc/reducer'

const reducers = combineReducers({
   misc: MiscReducer,
})

// redux-thunk
let enhancer = applyMiddleware(thunk)
const store = createStore(
   reducers,
   {},
   enhancer
)

//redux-saga
// const sagaMiddleware = createSagaMiddleware()
// let data = require('./app/saga').default
// const store = createStore(
   // reducers,
   // applyMiddleware(sagaMiddleware),
// )
// sagaMiddleware.run(data)



export default store
