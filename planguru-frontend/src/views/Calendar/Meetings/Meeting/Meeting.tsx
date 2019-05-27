import React from 'react';

import moment from 'moment';
import CheckmarkIcon from '../../../../components/Icons/Checkmark';
import { IMeeting } from '../../../../store/calendar/types';
import { getDurationStringFromInteval } from '../../../../utils/getDurationStringFromInteval';
import { MEETING_DECORATION_MAP } from '../../meetingDecorationMap';
import {
  CheckmarkWrapper,
  Description,
  Info,
  Logo,
  Signs,
  Time,
  Title,
  Wrapper,
} from './Meeting.styles';

interface IMeetingProps {
  meeting: IMeeting;
}

const Meeting: React.FC<IMeetingProps> = props => {
  const decoration = MEETING_DECORATION_MAP[props.meeting.type];
  const startTime = moment(props.meeting.startTime);
  const endTime = moment(props.meeting.startTime).add(
    props.meeting.durationInMinutes,
    'minutes',
  );
  const durationString = getDurationStringFromInteval(startTime, endTime);

  return (
    <Wrapper borderColor={decoration.fontColor}>
      <Description>
        <Info>
          <Title>{props.meeting.title}</Title>
          <Time>{durationString}</Time>
        </Info>
      </Description>
      <Signs>
        <Logo src={decoration.logo} />
        <CheckmarkWrapper backgroundColor={decoration.checkmarkBackgroundColor}>
          <CheckmarkIcon color={decoration.fontColor} />
        </CheckmarkWrapper>
      </Signs>
    </Wrapper>
  );
};

export default Meeting;
