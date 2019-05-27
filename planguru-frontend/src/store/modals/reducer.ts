import { Reducer } from 'redux';
import { IModalsState, ModalActionTypes } from './types';

const initialState: IModalsState = {
  openedModals: [],
};

export const modalsReducer: Reducer<IModalsState> = (
  state = initialState,
  action: any,
) => {
  switch (action.type) {
    case ModalActionTypes.OPEN_MODAL: {
      return {
        ...state,
        openedModals: [
          ...state.openedModals,
          {
            type: action.payload.type,
            params: action.payload.params,
          },
        ],
      };
    }
    case ModalActionTypes.CLOSE_MODAL: {
      return {
        ...state,
        openedModals: [
          ...state.openedModals.slice(0, state.openedModals.length - 1),
        ],
      };
    }
    default: {
      return state;
    }
  }
};
