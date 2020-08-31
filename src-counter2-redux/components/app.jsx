import React, {Component} from 'react'

import * as actions  from '../redux/actions'


export default class App extends Component {

  increment = () => {
    // 1 获取select的数据
    const number = this.select.value * 1
    // 调用store的方法更新状态
    this.props.store.dispatch(actions.increment(number))
  }

  decrement = () => {
    // 1 获取select的数据
    const number = this.select.value * 1
     // 调用store的方法更新状态
    this.props.store.dispatch(actions.decrement(number))
  }

  incrementIfOdd = () => {
    // 1 获取select的数据
    const number = this.select.value * 1
    // 2 得到state中的count
    const count = this.props.store.getState()
    // 判断count的值是否为奇数
    if (count%2 === 1) {
      // 调用store的方法更新状态
      this.props.store.dispatch(actions.increment(number))
    }

  }

  incrementAsync = () => {
    // 1 获取select的数据
    const number = this.select.value * 1
    // 设置延时定时器
    setTimeout(() => {
      // 调用store的方法更新状态
      this.props.store.dispatch(actions.increment(number))
    }, 1000)
    
  }

  render () {
    const count = this.props.store.getState()
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