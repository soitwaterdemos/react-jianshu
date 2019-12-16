import { combineReducers } from 'redux-immutable';
import { reducer as todolistReducer } from '../pages/todolist/store/index.js';


const reducer = combineReducers({
  todolist: todolistReducer
})

export default reducer


// import { combineReducers } from 'redux-immutable';
// import { reducer as headerReducer } from '../common/header/store/index.js';

// const reducer = combineReducers({
//   header: headerReducer
// })

// export default reducer



// const defaultState = {
//   todoList: {
//     inputValue: '',
//     list: ["a", "b", "c", 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k']
//   }
// }

// export default (state = defaultState, action) => {
//   if(action.type === 'change_input_value') {
//     const newState = JSON.parse(JSON.stringify(state)) 
//     newState.todoList.inputValue = action.value
//     return newState
//   } else if (action.type === 'add_todoItem') {
//     const newState = JSON.parse(JSON.stringify(state))
//     newState.todoList.list.push(newState.todoList.inputValue)
//     newState.todoList.inputValue = ''
//     return newState
//   } else if (action.type === 'remove_todoitem') {
//     const newState = JSON.parse(JSON.stringify(state))
//     newState.todoList.list.splice(action.value, 1)
//     return newState
//   } else if (action.type === 'init_list_action') {
//     // console.log('succ')
//   }
//   return state
// }