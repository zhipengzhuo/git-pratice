import {createStore} from 'redux'

import {counter} from './reducers'

// 生成一个state对象
const store = createStore(counter) // 内部会第一次调用reduer函数得到初始的state
console.log(store)

export default store
