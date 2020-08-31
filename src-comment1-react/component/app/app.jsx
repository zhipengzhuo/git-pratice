/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import CommentAdd from '../comment-add/comment-add'
import CommentList from '../comment-list/comment-list'

export default class App extends Component {
  
  state = {
    comments: []
  }

  componentDidMount () {
    setTimeout(() => {
      const comments = [
        {username: 'tom', content: 'react is hard'},
        {username: 'ross', content: 'react is good'}
      ]
      this.setState({comments})
    }, 1000)
  }

  // 添加评论的方法
  addComment = (comment) => {
    const {comments} = this.state
    comments.unshift(comment)
    this.setState({comments})
  }
  // 删除评论的方法
  deleteComment = (index) => {
    const {comments} = this.state
    comments.splice(index, 1)
    this.setState({comments})
  } 

  render() {
    const {comments} = this.state
    return (
      <div>
        <header className="site-header jumbotron">
            <div className="container">
              <div className="row">
                <div className="col-xs-12">
                  <h1>请发表对React的评论</h1>
                </div>
              </div>
            </div>
          </header>
          <div className="container">
          <CommentAdd addComment = {this.addComment}/>
          <CommentList comments = {comments} deleteComment = {this.deleteComment}/>
        </div>
      </div>
    )
  }
}