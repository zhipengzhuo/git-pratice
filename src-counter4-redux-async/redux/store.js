import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import {composeWithDevTools} from 'redux-devtools-extension'

import {counter} from './reducers'

// 生成一个state对象
const store = createStore(
  counter, 
  composeWithDevTools(applyMiddleware(thunk))// 应用上异步中间件
) // 内部会第一次调用reduer函数得到初始的state
// console.log(store)

export default store




