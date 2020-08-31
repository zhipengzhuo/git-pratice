import {createStore, applyMiddleware} from 'redux'
// import thunk from 'redux-thunk'
import createSagaMiddleware  from 'redux-saga'

import {composeWithDevTools} from 'redux-devtools-extension'

import {counter} from './reducers'
import rootSaga from './saga'

const sagaMiddleware = createSagaMiddleware()

// 生成一个state对象
const store = createStore(
  counter, 
  composeWithDevTools(applyMiddleware(sagaMiddleware))// 应用上异步中间件
) // 内部会第一次调用reduer函数得到初始的state
// console.log(store)
sagaMiddleware.run(rootSaga)
export default store




