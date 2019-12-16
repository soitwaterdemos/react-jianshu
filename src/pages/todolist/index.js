import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoListUI from './TodoListUI.js'
import { actionCreators } from './store/index.js'

class TodoList extends Component {

  render () {
    // window._ccc = this.props
    // console.log(this.props)
    // console.log(this.props.inputValue)
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
    inputValue: state.get('todolist').get('inputValue'),
    // inputValue: state.get('todoList').get('inputValue'),
    list: state.get('todolist').get('list')
  }
}
// 把 store.dispatch 挂载 到 this.props 上
const mapDispatchToProps = (dispatch) => {
  // 这里写原来在类组件中定义的方法, 现在类组件中不需要写方法了
  return {
    handleInputChange(e) {
      dispatch(actionCreators.getInputChangeAction(e.target.value))
    },
    handleTodoitemDele(index) {
      dispatch(actionCreators.getTodoitemDeleAction(index))
    },
    handleBtnClick() {
      dispatch(actionCreators.getBtnClickAction())
    }
  }
}
// connet 将（ui组件 TodoList）与（store）连接，并返回一个（容器组件）
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)