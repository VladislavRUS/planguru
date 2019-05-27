import { ICredentials } from '../login/types';

export enum RegisterActionTypes {
  REGISTER_REQUEST = '@@register/REGISTER_REQUEST',
  REGISTER_SUCCESS = '@@register/REGISTER_SUCCESS',
  REGISTER_ERROR = '@@register/REGISTER_ERROR',
}

export interface IRegisterState {
  isLoading: boolean;
  hasAccount: boolean;
  errorMessage: string;
  credentials: ICredentials;
}
