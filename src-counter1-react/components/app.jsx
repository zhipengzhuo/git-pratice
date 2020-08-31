import React, {Component} from 'react'

export default class App extends Component {
  state = {
    count: 0
  }

  increment = () => {
    // 1 获取select的数据
    const number = this.select.value * 1
    // 2 得到state中的count
    const {count} = this.state
    // 3 更新count的状态
    this.setState({count: count + number})
  }

  decrement = () => {
    // 1 获取select的数据
    const number = this.select.value * 1
    // 2 得到state中的count
    const {count} = this.state
    // 3 更新count的状态
    this.setState({count: count - number})
  }

  incrementIfOdd = () => {
    // 1 获取select的数据
    const number = this.select.value * 1
    // 2 得到state中的count
    const {count} = this.state
    // 判断count的值是否为奇数
    if (count%2 === 1) {
      // 3 更新count的状态
      this.setState({count: count + number})
    }

  }

  incrementAsync = () => {
    // 1 获取select的数据
    const number = this.select.value * 1
    // 2 得到state中的count
    const {count} = this.state
    // 设置延时定时器
    setTimeout(() => {
      // 3 更新count的状态
      this.setState({count: count + number})
    }, 1000)
    
  }

  render () {
    const {count} = this.state
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