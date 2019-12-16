import React, { Component } from 'react'
import store from '../store/index.js'
import TodoListUI from './TodoListUI.js'
import { getInitList } from '../store/actionCreators.js'
import { connect } from 'react-redux'
class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState().todoList
    // this.handleInputChange = this.handleInputChange.bind(this)
    // this.handleStoreChange = this.handleStoreChange.bind(this)
    // this.handleBtnClick = this.handleBtnClick.bind(this)
    // this.handleTodoitemDele = this.handleTodoitemDele.bind(this)
    store.subscribe(this.handleStoreChange)
  }
  componentDidMount() {
    const action = getInitList()
    store.dispatch(action)
  }
  handleTodoitemDele(index) {
    const action = {
      type: 'remove_todoitem',
      value: index
    }
    store.dispatch(action)
  }
  handleBtnClick() {
    const action = {
      type: 'add_todoItem'
    }
    store.dispatch(action)
  }
  render () {
    return <TodoListUI 
      inputValue={this.props.inputValue}
      handleInputChange={this.props.handleInputChange}
      handleBtnClick={this.props.handleBtnClick}
      handleTodoitemDele={this.props.handleTodoitemDele.bind(this)}
      list={this.props.list} 
    />
  }
}

// 表示将组件的 props 映射到 store
const mapStateToProps = (state) => {
  return {
    // 即 组件的 this.props.inputValue === store 的 state.todoList.inputValue
    inputValue: state.todoList.inputValue,
    list: state.todoList.list
  }
}
// 把 store.dispatch 挂载 到 this.props 上
const mapDispatchToProps = (dispatch) => {
  // 这里写原来在类组件中定义的方法, 现在类组件中不需要写方法了
  return {
    handleInputChange(e) {
      const action = {
        type: 'change_input_value',
        value: e.target.value
      }
      dispatch(action)
    },
    handleTodoitemDele(index) {
      const action = {
        type: 'remove_todoitem',
        value: index
      }
      store.dispatch(action)
    },
    handleBtnClick() {
      const action = {
        type: 'add_todoItem'
      }
      store.dispatch(action)
    }
  }
}
// connet 将（ui组件 TodoList）与（store）连接，并返回一个（容器组件）
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)