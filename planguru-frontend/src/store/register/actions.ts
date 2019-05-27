import { action } from 'typesafe-actions';
import { ICredentials } from '../login/types';
import { RegisterActionTypes } from './types';

export const registerRequest = (data: ICredentials) =>
  action(RegisterActionTypes.REGISTER_REQUEST, data);
export const registerSuccess = () =>
  action(RegisterActionTypes.REGISTER_SUCCESS);
export const registerError = (message: string) =>
  action(RegisterActionTypes.REGISTER_ERROR);
