import React, { Component } from 'react'
import './style.css'
import PropTypes from 'prop-types'

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.props.deleteItem(this.props.index)
  }
  shouldComponentUpdate(newPops, newState) {
    return false
  }
  render() {
    console.log('child rend')
    return (
      <div 
        onClick={this.handleClick}
      >
        {this.props.index}: {this.props.content}
      </div>
    )
  }
}

TodoItem.propTypes = {
  content: PropTypes.string,
  deleteItem: PropTypes.func,
  index: PropTypes.number
}

export default TodoItem