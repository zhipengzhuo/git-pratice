import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class CommentAdd extends Component {

  state = {
    username: '',
    content: ''
  }

  static propTypes = {
    addComment: PropTypes.func.isRequired
  }


  usernameChange = (event) => {
    // 获取数据
    const username = event.target.value
    // 更新状态
    this.setState({username})
  }

  contentChange = (event) => {
    // 获取数据
    const content = event.target.value
    // 更新状态
    this.setState({content})
  }

  handlerSubmit = () => {
    // 获取数据并封装成comment
    const comment = this.state
    // 更新数据
    this.props.addComment(comment)
    // 清除输入数据
    this.setState({
      username: '',
      content: ''
    })
  }

  render () {
    const {username, content} = this.state
    return (
      <div className="col-md-4">
        <form className="form-horizontal">
          <div className="form-group">
            <label>用户名</label>
            <input type="text" className="form-control" placeholder="用户名" value={username} onChange = {this.usernameChange}/>
          </div>
          <div className="form-group">
            <label>评论内容</label>
            <textarea className="form-control" rows="6" placeholder="评论内容" value={content} onChange = {this.contentChange}></textarea>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="button" className="btn btn-default pull-right" onClick = {this.handlerSubmit}>提交</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
