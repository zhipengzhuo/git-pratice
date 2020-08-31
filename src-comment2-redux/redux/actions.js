/**
 * 包含多个action creator(action的工厂函数)
 */
import {ADD_COMMENT, DELETE_COMMENT, RECEIVE_COMMENTS} from './actions-type'

// 同步添加评论
export const  addComment = (comment) => ({type: ADD_COMMENT, data: comment})

// 同步删除评论
export const  deleteComment = (index) => ({type: DELETE_COMMENT, data: index})

// 同步获取评论
const receiveComments = (comments) => ({type: RECEIVE_COMMENTS, data: comments})
// 异步获取评论
export const getComments = () => {
  return dispatch => {
    setTimeout(() => {
      const comments = [
        {username: 'tom', content: 'react is hard'},
        {username: 'ross', content: 'react is good'}
      ]
      // 发送ajax异步请求
      dispatch(receiveComments(comments))
    }, 1000) 
  }
}