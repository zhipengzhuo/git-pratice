/**
 * redux的核心管理对象store
 */
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import {comments} from './reducers'

export default createStore(
  comments,
  composeWithDevTools(applyMiddleware(thunk))
)

