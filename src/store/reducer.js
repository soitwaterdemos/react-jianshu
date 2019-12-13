const defaultState = {
  todoList: {
    inputValue: '',
    list: ["a", "b", "c"]
  }
}

export default (state = defaultState, action) => {
  if(action.type === 'change_input_value') {
    const newState = JSON.parse(JSON.stringify(state)) 
    newState.todoList.inputValue = action.value
    return newState
  } else if (action.type === 'add_todoItem') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.todoList.list.push(newState.todoList.inputValue || 'null')
    newState.todoList.inputValue = ''
    return newState
  } else if (action.type === 'remove_todoitem') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.todoList.list.splice(action.value, 1)
    return newState
  }
  return state
}