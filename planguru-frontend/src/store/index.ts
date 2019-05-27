import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';
import { calendarReducer } from './calendar/reducer';
import { ICalendarState } from './calendar/types';
import { loginReducer } from './login/reducer';
import loginSaga from './login/sagas';
import { ILoginState } from './login/types';
import { modalsReducer } from './modals/reducer';
import { IModalsState } from './modals/types';
import { registerReducer } from './register/reducer';
import registerSaga from './register/sagas';
import { IRegisterState } from './register/types';

export interface IApplicationState {
  login: ILoginState;
  register: IRegisterState;
  calendar: ICalendarState;
  modals: IModalsState;
  router: any;
}

export const createRootReducer = (history: History) =>
  combineReducers({
    login: loginReducer,
    register: registerReducer,
    calendar: calendarReducer,
    modals: modalsReducer,
    router: connectRouter(history),
  });

export function* rootSaga() {
  yield all([fork(loginSaga), fork(registerSaga)]);
}
