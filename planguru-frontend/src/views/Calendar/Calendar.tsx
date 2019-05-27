import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import RoundButton from '../../components/RoundButton/RoundButton';
import { openModal } from '../../store/modals/actions';
import { ModalTypes } from '../../store/modals/types';
import { AddMeetingButtonWrapper, Wrapper } from './Calendar.styles';
import Meetings from './Meetings';
import Schedule from './Schedule';

interface IMapDispatchProps {
  openModal: typeof openModal;
}

type AllProps = IMapDispatchProps;
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      openModal,
    },
    dispatch,
  );

class Calendar extends React.Component<AllProps> {
  public render() {
    return (
      <Wrapper>
        <Schedule />
        <Meetings />
        <AddMeetingButtonWrapper>
          <RoundButton onClick={this.onAddMeeting} />
        </AddMeetingButtonWrapper>
      </Wrapper>
    );
  }

  private onAddMeeting = () => {
    this.props.openModal({
      type: ModalTypes.CREATE_MEETING,
      params: {},
    });
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(Calendar);
