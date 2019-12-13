import React, { Component } from 'react'
import store from '../store/index.js'
import TodoListUI from './TodoListUI.js'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState().todoList
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleTodoitemDele = this.handleTodoitemDele.bind(this)
    store.subscribe(this.handleStoreChange)
  }
  handleStoreChange() {
    this.setState(store.getState().todoList)
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
  handleInputChange(e) {
    const action = {
      type: 'change_input_value',
      value: e.target.value
    }
    store.dispatch(action)
  }
  render () {
    return <TodoListUI 
      inputValue={this.state.inputValue} 
      handleInputChange={this.handleInputChange}
      handleBtnClick={this.handleBtnClick}
      handleTodoitemDele={this.handleTodoitemDele}
      list={this.state.list}   
    />
  }
}

export default TodoList