import axios from 'axios';
import {all, takeEvery, call} from 'redux-saga/effects';
import { Actions } from './actions/tActions';
import { IAction } from './reducers/user';

function* signUp(action: IAction): any {
  try {
    const response = yield call(() => {
      const result = axios({
        method: 'POST',
        url: '/api/signup',
        data: action.payload
      });
      return result;
    });
    console.log(response);
  } catch (err: any) {console.log(err.message)};
}

function* signUpWatcher() {
  yield takeEvery(Actions.SignUp, signUp);
}

export function* rootSaga() {
  yield all([signUpWatcher()]);
}