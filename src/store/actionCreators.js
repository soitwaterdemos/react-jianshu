import axios from 'axios'
import { INIT_LIST_ACTION } from './actionTypes.js'
axios.defaults.baseURL = 'http://localhost:3333' 

export const initListAction = (data) => ({
  type: INIT_LIST_ACTION,
  data
})
export const getTodolist = () => {
  return (dispatch) => { // dispatch 参数使得
    axios.get('/get-todolist').then((res) => {
      const data = res.data
      const action = initListAction(data) // 获取action
      dispatch(action) // 通知 reducer.js 
    })
  }
}

export const getInitList = () => ({
  type: INIT_LIST_ACTION
})