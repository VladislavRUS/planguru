import { action } from 'typesafe-actions';
import { IModal, ModalActionTypes } from './types';

export const openModal = (data: IModal) =>
  action(ModalActionTypes.OPEN_MODAL, data);
export const closeModal = () => action(ModalActionTypes.CLOSE_MODAL);
