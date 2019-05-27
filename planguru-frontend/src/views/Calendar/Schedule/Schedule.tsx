import moment from 'moment';
import React from 'react';
import { connect } from 'react-redux';
import { IApplicationState } from '../../../store';
import { IMeeting } from '../../../store/calendar/types';
import Meeting from './Meeting';
import {
  CurrentTimeLine,
  FreeSpace,
  MeetingsZone,
  SCHEDULE_TOP_PADDING,
  StartTime,
  TIME_INTERVAL_HEIGHT_IN_PX,
  TimeInterval,
  Wrapper,
} from './Schedule.styles';

interface ITimeInterval {
  startTime: number;
  startTimeFormatted: string;
}

const TIME_INTERVAL_MINUTES = 30;
const PIXELS_IN_MINUTE = TIME_INTERVAL_HEIGHT_IN_PX / TIME_INTERVAL_MINUTES;

const getZeroDate = () =>
  moment()
    .hours(0)
    .minutes(0)
    .seconds(0);

const createDateTimeIntervals = (): ITimeInterval[] => {
  let startDate = getZeroDate();
  const endDate = getZeroDate().add(1, 'day');

  const intervals: ITimeInterval[] = [];

  while (startDate < endDate) {
    intervals.push({
      startTime: startDate.valueOf(),
      startTimeFormatted: startDate.format('HH:mm A'),
    });
    startDate = startDate.add(30, 'minutes');
  }

  return intervals;
};

interface IMeetingDimension {
  top: number;
  height: number;
}

interface IScheduleState {
  timeIntervals: ITimeInterval[];
  meetingPositions: IMeetingDimension[];
  currentTimeTop: number;
}

interface IMapStateProps {
  todayMeetings: IMeeting[];
}

type AllProps = IMapStateProps;

const mapStateToProps = (state: IApplicationState): IMapStateProps => {
  return {
    todayMeetings: state.calendar.meetings.filter(meeting =>
      moment(meeting.startTime).isSame(moment(), 'day'),
    ),
  };
};

class Schedule extends React.Component<AllProps, IScheduleState> {
  private currentTimeInterval: any | null = null;

  constructor(props: AllProps) {
    super(props);
    this.state = {
      timeIntervals: createDateTimeIntervals(),
      meetingPositions: [],
      currentTimeTop: 0,
    };
  }

  public componentDidMount() {
    this.initMeetingPositions();
    this.setupCurrentTimeInterval();
  }

  public componentWillUnmount() {
    if (this.currentTimeInterval !== null) {
      clearInterval(this.currentTimeInterval);
    }
  }

  public render() {
    const { timeIntervals, meetingPositions, currentTimeTop } = this.state;
    const { todayMeetings } = this.props;

    return (
      <Wrapper>
        <MeetingsZone>
          {timeIntervals.map(timeInterval => (
            <TimeInterval key={timeInterval.startTime}>
              <StartTime>{timeInterval.startTimeFormatted}</StartTime>
              <FreeSpace />
            </TimeInterval>
          ))}
          {meetingPositions.length > 0 &&
            todayMeetings.map((meeting, index) => (
              <Meeting
                key={meeting.id}
                meeting={meeting}
                top={meetingPositions[index].top}
                height={meetingPositions[index].height}
              />
            ))}
          {<CurrentTimeLine top={currentTimeTop} />}
        </MeetingsZone>
      </Wrapper>
    );
  }

  private initMeetingPositions() {
    const { timeIntervals } = this.state;
    const { todayMeetings } = this.props;

    const meetingPositions: IMeetingDimension[] = [];

    todayMeetings.forEach(meeting => {
      let timeIntervalIndexForMeeting = 0;

      for (let i = 0; i < timeIntervals.length; i++) {
        if (i === timeIntervals.length - 1) {
          timeIntervalIndexForMeeting = i;
        } else {
          const currentInterval = timeIntervals[i];
          const nextInterval = timeIntervals[i + 1];
          if (
            currentInterval.startTime < meeting.startTime &&
            meeting.startTime < nextInterval.startTime
          ) {
            timeIntervalIndexForMeeting = i;
            break;
          }
        }
      }

      const diff = moment(meeting.startTime).diff(
        timeIntervals[timeIntervalIndexForMeeting].startTime,
        'minutes',
      );

      meetingPositions.push({
        top:
          timeIntervalIndexForMeeting * TIME_INTERVAL_HEIGHT_IN_PX +
          diff * PIXELS_IN_MINUTE +
          SCHEDULE_TOP_PADDING,
        height: meeting.durationInMinutes * PIXELS_IN_MINUTE,
      });
    });

    this.setState({
      meetingPositions,
    });
  }

  private setupCurrentTimeInterval() {
    this.setCurrentTime();
    this.currentTimeInterval = setInterval(this.setCurrentTime, 10000);
  }

  private setCurrentTime = () => {
    const now = moment();
    const minutes = now.hours() * 60 + now.minutes();

    this.setState({
      currentTimeTop: minutes * PIXELS_IN_MINUTE + SCHEDULE_TOP_PADDING,
    });
  };
}

export default connect(
  mapStateToProps,
  null,
)(Schedule);
