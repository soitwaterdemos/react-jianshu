import { combineReducers } from 'redux-immutable';
import { reducer as todolistReducer } from '../pages/todolist/store/index.js';
import { reducer as headerReducer } from '../common/header/store/index.js';
const reducer = combineReducers({
  todolist: todolistReducer,
  header: headerReducer
})

export default reducer
