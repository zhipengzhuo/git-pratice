/*
 *  包含所有action creator
 */

import {DECREMENT, INCREMENT} from './action-types'

// 增加
export const increment = (number) => ({type: INCREMENT, data: number}) 

// 减少
export const decrement = (number) => ({type: DECREMENT, data: number}) 

// 异步增加
export const incrementAsync = (number) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment())
    }, 1000)
  }
}