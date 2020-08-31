import React from 'react'
import ReactDom from 'react-dom'

import App from './components/app'
import store from './redux/store'

function render() {
  ReactDom.render(<App store={store}/>, document.getElementById('root'))
}

// 初始化渲染界面
render()

// 订阅监听（store中的状态变化了，就会自动进行重绘）
store.subscribe(render)