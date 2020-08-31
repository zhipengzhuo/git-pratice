/**
 * 包含多个reducer函数（根据老的state和action返回一个新的state)
 */

// import {combineReducers} from 'redux'

import {ADD_COMMENT, DELETE_COMMENT, RECEIVE_COMMENTS} from './actions-type'

const initComments = []
export const comments = (state = initComments, actions) => {
  switch (actions.type) {
    case ADD_COMMENT:
      return [actions.data, ...state]
    case DELETE_COMMENT:
      return state.filter((comment, index) => actions.data !== index)
    case RECEIVE_COMMENTS:
      return actions.data
    default:
      return state
  }
}

/*
export function counter(state = 0, action) {
  console.log(state, action)
  switch (action.type) {
    case INCREMENT:
      return state + action.data
    case DECREMENT:
      return state - action.data
    default:
      return state
  } 
}
*/

/*
// 多个reducer时向外暴露需引入 combineReducers

export default combineReducers(
  {counter, comments}
)

redux 向外暴露的是个什么结构？
{counter: 2, comments: []}

*/