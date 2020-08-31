
import React, {Component} from 'react'
import PropTypes from 'prop-types'

import './commentItem.css'

export default class CommentItem extends Component {
  static propTypes = {
    comment: PropTypes.object.isRequired,
    deleteComment: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired
  }

  handlerClick = () => {
    const {comment, deleteComment, index} = this.props
    // 是否删除
    if (window.confirm(`确认删除${comment.username}的评论？`)) {
      deleteComment(index)
    }
  }

  render () {
    const {comment} = this.props
    return (
      <li className="list-group-item">
        <div className="handle">
          <span onClick = {this.handlerClick}>删除</span>
        </div>
        <p className="user"><span >{comment.username}</span><span>说:</span></p>
        <p className="centence">{comment.content}</p>
      </li>
    )
  }
}
