import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { callApi } from '../../utils/api';
import { registerError, registerSuccess } from './actions';
import { RegisterActionTypes } from './types';

function* handleRegister() {
  try {
    const res = yield call(callApi, 'get', '/api/register');

    if (res.error) {
      yield put(registerError(res.error));
    } else {
      yield put(registerSuccess());
    }
  } catch (error) {
    if (error instanceof Error) {
      yield put(registerError(error.message));
    } else {
      yield put(registerError('Unknown error'));
    }
  }
}

function* watchRegisterRequest() {
  yield takeEvery(RegisterActionTypes.REGISTER_REQUEST, handleRegister);
}

function* registerSaga() {
  yield all([fork(watchRegisterRequest)]);
}

export default registerSaga;
