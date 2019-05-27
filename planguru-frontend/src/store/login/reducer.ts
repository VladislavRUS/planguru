import { Reducer } from 'redux';
import { ILoginState, LoginActionTypes } from './types';

export const initialState: ILoginState = {
  isLoading: false,
  errorMessage: '',
  credentials: {
    email: '',
    password: '',
  },
};

export const loginReducer: Reducer<ILoginState> = (
  state = initialState,
  action: any,
): ILoginState => {
  switch (action.type) {
    case LoginActionTypes.LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
        credentials: {
          email: action.payload.email,
          password: action.payload.password,
        },
      };
    }
    case LoginActionTypes.LOGIN_ERROR: {
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      };
    }
    case LoginActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    default:
      return state;
  }
};
