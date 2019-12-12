import React, { Component, Fragment } from 'react'
import './style.css'
import TodoItem from './TodoItem.js'
import { CSSTransition } from 'react-transition-group'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true,
      inputValue: '默认',
      list: ['listen', 'read']
    }
    this.getTodoItem = this.getTodoItem.bind(this)
  }
  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }
  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }
  handleItemDelete(index) {
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list
    })
  }
  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <Fragment key={index}>
          <TodoItem
            index={index}
            content={item}
            deleteItem={this.handleItemDelete.bind(this)}
          />
          {
            /* <li 
                key={index} 
                onClick={this.handleItemDelete.bind(this, index)}
                dangerouslySetInnerHTML={{__html: item}}
              >
              </li> */
          }
        </Fragment>
      )
    })
  }
  showOrHide() {
    this.setState(
      (prev) => {
        return {
          show: !prev.show
        }
      }
    )
  }
  render () {
    return (
      <Fragment>
        <div>
          <CSSTransition in={this.state.show} timeout={1000} classNames='test'>
            <span>v-show实现</span>
          </CSSTransition>
          <div onClick={ this.showOrHide.bind(this)}>
            show or hide
          </div>
        </div>
        <div>
          <label htmlFor='insertArea'>输入内容</label>
          <input
            id='insertArea'
            className='input'
            value={this.state.inputValue}
            onChange={this.handleInputChange.bind(this)}
          />
          <button
            onClick={this.handleBtnClick.bind(this)}
          >Add</button>
        </div>
        <ul>
          {
            this.getTodoItem()
          }
        </ul>
      </Fragment>
    )
  }
}

export default TodoList