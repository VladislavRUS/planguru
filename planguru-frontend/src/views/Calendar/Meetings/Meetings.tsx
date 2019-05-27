import moment from 'moment';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import NumberChip from '../../../components/NumberChip/NumberChip';
import Switch from '../../../components/Switch';
import { IApplicationState } from '../../../store';
import { toggleTodayMeetings } from '../../../store/calendar/actions';
import { IMeeting } from '../../../store/calendar/types';
import Meeting from './Meeting';
import {
  Header,
  List,
  SwitchText,
  SwitchWrapper,
  Title,
  Wrapper,
} from './Meetings.styles';

interface IMapStateProps {
  meetings: IMeeting[];
  showTodayOnlyInMeetings: boolean;
}

interface IMapDispatchProps {
  onToggleMeetings: typeof toggleTodayMeetings;
}

const mapStateToProps = (state: IApplicationState): IMapStateProps => {
  const { showTodayOnlyInMeetings, meetings } = state.calendar;
  return {
    showTodayOnlyInMeetings,
    meetings: !showTodayOnlyInMeetings
      ? meetings
      : meetings.filter(meeting =>
          moment(meeting.startTime).isSame(moment(), 'day'),
        ),
  };
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      onToggleMeetings: toggleTodayMeetings,
    },
    dispatch,
  );

type AllProps = IMapStateProps & IMapDispatchProps;

const Meetings: React.FC<AllProps> = props => (
  <Wrapper>
    <Header>
      <Title>Meetings</Title>
      <NumberChip
        number={props.meetings.length}
        borderColor={'#eaf9f1'}
        backgroundColor={'rgb(45, 199, 109)'}
        fontColor={'#fff'}
      />
      <SwitchWrapper>
        <SwitchText>Today only</SwitchText>
        <Switch
          value={props.showTodayOnlyInMeetings}
          onClick={props.onToggleMeetings}
        />
      </SwitchWrapper>
    </Header>
    <List>
      {props.meetings.map(meeting => (
        <Meeting key={meeting.id} meeting={meeting} />
      ))}
    </List>
  </Wrapper>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Meetings);
