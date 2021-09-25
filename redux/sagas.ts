import {all, takeEvery} from 'redux-saga/effects';

function* helloSaga() {
  console.log('hello, sagas');
}

function* helloWatcher() {
  yield takeEvery('RUN_HELLO', helloSaga);
}

export function* rootSaga() {
  yield all([helloWatcher()]);
}