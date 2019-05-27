import React from 'react';

import moment from 'moment';
import Dropdown from '../../../../components/Dropdown/Dropdown';
import KebubIcon from '../../../../components/Icons/Kebub';
import { IMeeting } from '../../../../store/calendar/types';
import { getDurationStringFromInteval } from '../../../../utils/getDurationStringFromInteval';
import { MEETING_DECORATION_MAP } from '../../meetingDecorationMap';
import {
  Description,
  Duration,
  Info,
  KebubIconWrapper,
  Logo,
  Title,
  Wrapper,
} from './Meeting.styles';

interface IMeetingProps {
  top: number;
  height: number;
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

  const kebubRef: React.RefObject<HTMLElement> = React.createRef();

  return (
    <>
      <Wrapper
        top={props.top}
        height={props.height}
        backgroundColor={decoration.backgroundColor}
        borderColor={decoration.borderColor}
      >
        <Description>
          <Logo src={decoration.logo} />
          <Info>
            <Title fontColor={decoration.fontColor}>
              {props.meeting.title}
            </Title>
            <Duration>{durationString}</Duration>
          </Info>
        </Description>
        <KebubIconWrapper ref={kebubRef}>
          <KebubIcon color={decoration.fontColor} />
        </KebubIconWrapper>
      </Wrapper>
      <Dropdown attachTo={kebubRef} width={200} isCentered={true}>
        Meeting menu
      </Dropdown>
    </>
  );
};

export default Meeting;
