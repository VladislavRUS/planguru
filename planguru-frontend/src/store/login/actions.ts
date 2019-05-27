import { replace } from 'connected-react-router';
import { action } from 'typesafe-actions';
import { Routes } from '../../constants/Routes';
import { ICredentials, LoginActionTypes } from './types';

export const loginRequest = (data: ICredentials) =>
  action(LoginActionTypes.LOGIN_REQUEST, data);
export const loginError = (message: string) =>
  action(LoginActionTypes.LOGIN_ERROR, message);
export const loginSuccess = () => action(LoginActionTypes.LOGIN_SUCCESS);
export const redirectToMain = () => replace(Routes.MAIN);
