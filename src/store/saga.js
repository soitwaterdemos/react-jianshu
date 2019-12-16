
import { takeEvery, put } from 'redux-saga/effects'
import { INIT_LIST_ACTION } from './actionTypes.js'
import { initListAction } from './actionCreators.js'
import axios from 'axios'

function* getInitList() {
  const res = yield axios.get('/get-todolist')
  const action = initListAction(res.data)
  yield put(action) // 相当于 store.dispatch(action) // 已经向后台获取数据, 通知 reducer.js 执行后续操作
}

function* mySaga() {
  yield takeEvery(INIT_LIST_ACTION, getInitList) // 第一个参数：action.type; 第二个参数：异步操作
} 

export default mySaga