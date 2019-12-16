import { CHANGE_INPUT_VALUE, ADD_TODOITEM, REMOVE_TODOITEN } from './constants.js'


export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
}) 
export const getTodoitemDeleAction = (value) => ({
  type: REMOVE_TODOITEN,
  value
})

export const getBtnClickAction = () => ({
  type: ADD_TODOITEM
})

// import axios from 'axios'
// import { INIT_LIST_ACTION } from './actionTypes.js'
// axios.defaults.baseURL = 'http://localhost:3333' 

// export const initListAction = (data) => ({
//   type: INIT_LIST_ACTION,
//   data
// })
// export const getTodolist = () => {
//   return (dispatch) => { // dispatch 参数使得
//     axios.get('/get-todolist').then((res) => {
//       const data = res.data
//       const action = initListAction(data) // 获取action
//       dispatch(action) // 通知 reducer.js 
//     })
//   }
// }

// export const getInitList = () => ({
//   type: INIT_LIST_ACTION
// })