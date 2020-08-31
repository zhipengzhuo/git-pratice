import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Counter extends Component {
  static propTypes = {
    count: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired
  }

  increment = () => {
    // 1 获取select的数据
    const number = this.select.value * 1
    // 调用store的方法更新状态
    this.props.increment(number)
  }

  decrement = () => {
    // 1 获取select的数据
    const number = this.select.value * 1
     // 调用store的方法更新状态
     this.props.decrement(number)
  }

  incrementIfOdd = () => {
    // 1 获取select的数据
    const number = this.select.value * 1
    // 2 得到state中的count
    const {count} = this.props
    // 判断count的值是否为奇数
    if (count%2 === 1) {
      // 调用store的方法更新状态
      this.props.increment(number)
    }

  }

  incrementAsync = () => {
    // 1 获取select的数据
    const number = this.select.value * 1
    // 2 调用store的方法异步更新状态
    this.props.incrementAsync(number)
    
  }

  render () {
    const {count} = this.props
    return (
      <div>
        <p>click {count} times</p>
        <select ref={(select) => this.select = select}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>increment if odd</button>&nbsp;
        <button onClick={this.incrementAsync}>increment async</button>
      </div>
    )
  }
}
