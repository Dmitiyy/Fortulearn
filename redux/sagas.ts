import axios from 'axios';
import {all, takeEvery, call, put} from 'redux-saga/effects';
import { Actions } from './actions/tActions';
import { defaultAction } from './actions/user';
import { IAction } from './reducers/user';

function* signUp(action: IAction): any {
  try {
    yield put(defaultAction(true, 'signupLoading'));

    const response = yield call(() => {
      return axios({
        method: 'POST',
        url: '/api/signup',
        data: action.payload
      });
    });

    yield put(defaultAction(response.data.body.user, 'user'));
    yield put(defaultAction(response.data.body.token, 'token'));

    yield put(defaultAction(false, 'signupError'));
    yield put(defaultAction(false, 'signupLoading'));
  } catch (err: any) {
    yield put(defaultAction(true, 'signupError'));
    yield put(defaultAction(false, 'signupLoading'));
  };
}

function* signUpWatcher() {
  yield takeEvery(Actions.SignUp, signUp);
}

export function* rootSaga() {
  yield all([signUpWatcher()]);
}