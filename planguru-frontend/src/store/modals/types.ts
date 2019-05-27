export enum ModalActionTypes {
  OPEN_MODAL = '@@modal/OPEN_MODAL',
  CLOSE_MODAL = '@@modal/CLOSE_MODAL',
}

export interface IModalsState {
  openedModals: IModal[];
}

export enum ModalTypes {
  CREATE_MEETING = 'CREATE_MEETING',
}

export interface IModal {
  type: ModalTypes.CREATE_MEETING;
  params: any;
}
