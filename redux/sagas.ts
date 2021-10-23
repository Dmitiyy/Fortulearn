import axios from 'axios';
import {all, takeEvery, call, put} from 'redux-saga/effects';
import { Actions } from './actions/tActions';
import { defaultAction } from './actions/user';
import { IAction } from './reducers/user';

function* registration(
  action: IAction, loading: string, error: string, request: string
): any {
  try {
    yield put(defaultAction(true, loading));

    const response = yield call(() => {
      return axios({
        method: 'POST',
        url: `/api/${request}`,
        data: action.payload
      });
    });

    yield put(defaultAction(response.data.body.user, 'user'));
    yield put(defaultAction(response.data.body.token, 'token'));

    yield put(defaultAction(false, error));
    yield put(defaultAction(false, loading));
  } catch (err: any) {
    yield put(defaultAction(true, error));
    yield put(defaultAction(false, loading));
  };
}

function* signUp(action: IAction): any {
  yield registration(action, 'signupLoading', 'signupError', 'signup');
}

function* logIn(action: IAction): any {
  yield registration(action, 'loginLoading', 'loginError', 'login');
}

function* courseDetails(action: IAction): any {
  try {
    const response = yield call(() => {
      return axios({
        method: 'POST',
        url: '/api/getCertainCourse',
        data: action.payload       
      });
    });
    console.log(response);
    yield put(defaultAction(false, 'getCourseError'));
  } catch (err) {
    yield put(defaultAction(true, 'getCourseError'));
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