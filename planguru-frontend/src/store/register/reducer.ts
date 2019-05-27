import { Reducer } from 'redux';
import { IRegisterState, RegisterActionTypes } from './types';

export const initialState: IRegisterState = {
  isLoading: false,
  hasAccount: false,
  credentials: {
    email: '',
    password: '',
  },
  errorMessage: '',
};

export const registerReducer: Reducer<IRegisterState> = (
  state = initialState,
  action: any,
): IRegisterState => {
  switch (action.type) {
    case RegisterActionTypes.REGISTER_REQUEST: {
      return {
        ...state,
        isLoading: true,
        hasAccount: false,
        credentials: {
          email: action.payload.email,
          password: action.payload.password,
        },
      };
    }
    case RegisterActionTypes.REGISTER_SUCCESS: {
      return {
        ...state,
        hasAccount: true,
        isLoading: false,
      };
    }
    case RegisterActionTypes.REGISTER_ERROR: {
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      };
    }
    default:
      return state;
  }
};
