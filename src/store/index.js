import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducer.js';
import createSagaMiddleware from 'redux-saga'
import TodoListSaga from './saga.js'

// import TodoList from '../TodoList/TodoList.js';

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware)
)
const store = createStore(rootReducer, enhancer);
sagaMiddleware.run(TodoListSaga)

export default store