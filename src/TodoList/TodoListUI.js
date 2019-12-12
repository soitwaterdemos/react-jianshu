import React, { Component } from 'react'
import { Input, Button, List } from 'antd'

class TodoListUI extends Component {
  render() {
    return (
      <div style={{ 'marginLeft': '10px' }}>
        <h1>TodoList</h1>
        <Input
          placeholder={"请输入..."} value={this.props.inputValue}
          size={"large"} style={{ 'width': '300px', 'marginRight': '10px' }}
          onChange={this.props.handleInputChange}
        />
        <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
        <List
          style={{ 'marginTop': '10px' }}
          size="small"
          bordered
          dataSource={this.props.list}
          renderItem={
            (item, index) =>
              <List.Item
                key={index} onClick={(index) => { this.props.handleTodoitemDele(index) }}
              >
                {index}: {item}
              </List.Item>
          }
        />
      </div>
    )
  }
}

export default TodoListUI