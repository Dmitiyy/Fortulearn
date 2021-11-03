import { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import {all, takeEvery, call, put} from 'redux-saga/effects';
import { Actions } from './actions/tActions';
import { setDataDefault } from './reducers/user';

function* registration(
  action: PayloadAction, loading: string, error: string, request: string
): any {
  try {
    yield put(setDataDefault({ini: loading, data: true}));

    const response = yield call(() => {
      return axios({
        method: 'POST',
        url: `/api/${request}`,
        data: action.payload
      });
    });

    yield put(setDataDefault({ini: 'user', data: response.data.body.user}));
    yield put(setDataDefault({ini: 'token', data: response.data.body.token}));

    yield put(setDataDefault({ini: error, data: false}));
    yield put(setDataDefault({ini: loading, data: false}));
  } catch (err: any) {
    yield put(setDataDefault({ini: error, data: true}));
    yield put(setDataDefault({ini: loading, data: false}));
  };
}

function* signUp(action: PayloadAction): any {
  yield registration(action, 'signupLoading', 'signupError', 'signup');
}

function* logIn(action: PayloadAction): any {
  yield registration(action, 'loginLoading', 'loginError', 'login');
}

function* courseDetails(action: PayloadAction): any {
  try {
    const response = yield call(() => {
      return axios({
        method: 'POST',
        url: '/api/getCertainCourse',
        data: action.payload       
      });
    });
    console.log(response);
    yield put(setDataDefault({ini: 'getCourseError', data: false}));
  } catch (err) {
    yield put(setDataDefault({ini: 'getCourseError', data: true}));
  }
}

function* signUpWatcher() {
  yield takeEvery(Actions.SignUp, signUp);
}

function* logInWatcher() {
  yield takeEvery(Actions.LogIn, logIn);
}

function* courseDetailsWatcher() {
  yield takeEvery(Actions.CourseDetails, courseDetails);
}

export function* rootSaga() {
  yield all([signUpWatcher(), logInWatcher(), courseDetailsWatcher()]);
}