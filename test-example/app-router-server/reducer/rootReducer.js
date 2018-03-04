import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'

import table from './'

const reducer = combineReducers({
  table
})

console.log(thunkMiddleware)
console.log('-------------')
console.log(applyMiddleware)

const store = createStore(reducer, applyMiddleware(thunkMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;