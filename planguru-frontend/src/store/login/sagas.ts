import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { callApi } from '../../utils/api';
import { loginError, loginSuccess, redirectToMain } from './actions';
import { LoginActionTypes } from './types';

function* handleLogin() {
  try {
    const res = yield call(callApi, 'get', '/api/login');

    if (res.error) {
      yield put(loginError(res.error));
    } else {
      yield put(loginSuccess());
      yield put(redirectToMain());
    }
  } catch (error) {
    if (error instanceof Error) {
      yield put(loginError(error.message));
    } else {
      yield put(loginError('Unknown error code'));
    }
  }
}

function* watchLoginRequest() {
  yield takeEvery(LoginActionTypes.LOGIN_REQUEST, handleLogin);
}

function* loginSaga() {
  yield all([fork(watchLoginRequest)]);
}

export default loginSaga;
