import  {takeLatest, delay, put} from 'redux-saga/effects';

import {INCREMENT_ASYNC, INCREMENT_GO} from './action-types';

function* fetchIncrementAsync (action) {
  const {data} = action
  yield delay(2000)
  yield put({type: INCREMENT_ASYNC, data})
}

export default function* rootSaga () {
  yield takeLatest(INCREMENT_GO, fetchIncrementAsync)
}

// udpate some comment 