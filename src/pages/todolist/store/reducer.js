import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
  inputValue: '',
  list: ["a", "b", "c", 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k']
})

export default (state = defaultState, action) => {
  if (action.type === constants.CHANGE_INPUT_VALUE) {
    return state.set('inputValue', action.value)
  } else if (action.type === constants.ADD_TODOITEM) {
    let list = state.get('list').push(state.get('inputValue'))
    return state.set('list', list)
  } else if (action.type === constants.REMOVE_TODOITEN) {
    return state.merge({
      "list": state.get('list').splice(action.value, 1)
    })
  }
  return state
}