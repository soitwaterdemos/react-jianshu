// import { createStore, applyMiddleware, compose } from 'redux';
// import createSagaMiddleware from 'redux-saga'
// import rootReducer from './reducer.js';
// import TodoListSaga from './saga.js'

// const sagaMiddleware = createSagaMiddleware()
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// const enhancer = composeEnhancers(
//   applyMiddleware(sagaMiddleware)
// )
// const store = createStore(rootReducer, enhancer);
// sagaMiddleware.run(TodoListSaga)

// export default store


import reducer from './reducer.js';
import * as actionCreators from './actionCreators.js';
import * as constants from './constants.js';

export { reducer, actionCreators, constants };