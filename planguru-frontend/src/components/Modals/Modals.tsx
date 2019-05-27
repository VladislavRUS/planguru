import React from 'react';
import { Portal } from 'react-portal';
import { PoseGroup } from 'react-pose';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { IApplicationState } from '../../store';
import { closeModal } from '../../store/modals/actions';
import { IModal, ModalTypes } from '../../store/modals/types';
import CreateMeeting from './CreateMeeting/CreateMeeting';
import { Overlay } from './Modals.styles';

interface IMapStateProps {
  modals: IModal[];
}

const mapStateToProps = (state: IApplicationState) => {
  return {
    modals: state.modals.openedModals,
  };
};

interface IMapDispatchProps {
  closeModal: typeof closeModal;
}

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      closeModal,
    },
    dispatch,
  );

const MODALS_MAP = {
  [ModalTypes.CREATE_MEETING]: CreateMeeting,
};

type AllProps = IMapStateProps & IMapDispatchProps;

const Modals: React.FC<AllProps> = props => {
  return (
    <Portal>
      <PoseGroup>
        {props.modals.map((modal, idx) => {
          const Modal = MODALS_MAP[modal.type];
          return (
            <Overlay onClick={props.closeModal} key={idx}>
              <Modal params={modal.params} />
            </Overlay>
          );
        })}
      </PoseGroup>
    </Portal>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modals);
