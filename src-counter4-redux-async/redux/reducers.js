/**
 * 包含多个reducer函数的对象
 */
import {DECREMENT, INCREMENT} from './action-types'

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