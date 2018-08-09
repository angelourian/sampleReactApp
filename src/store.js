import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'

import MiscReducer from './redux/misc/reducer'

const reducers = combineReducers({
   misc: MiscReducer,
})

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
   reducers,
   applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(require('./app/saga').default)

export default store
