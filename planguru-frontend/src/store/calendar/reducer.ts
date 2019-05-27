import { Reducer } from 'redux';
import { CalendarActionTypes, ICalendarState, MeetingType } from './types';

const initialState: ICalendarState = {
  showTodayOnlyInMeetings: false,
  meetings: [
    {
      id: 1,
      title: 'Project daily stand-up',
      type: MeetingType.DAILY,
      startTime: new Date().setHours(1, 30),
      durationInMinutes: 45,
      participants: [],
    },
    {
      id: 2,
      title: 'Framer.js webinar',
      type: MeetingType.WEBINAR,
      startTime: new Date().setHours(3, 30),
      durationInMinutes: 30,
      participants: [],
    },
    {
      id: 3,
      title: 'F2F with Dawid Wozniak',
      type: MeetingType.PROJECT,
      startTime: new Date().setHours(4, 50),
      durationInMinutes: 30,
      participants: [],
    },
    {
      id: 4,
      title: 'Leads daily stand-up',
      type: MeetingType.DAILY,
      startTime: new Date().setHours(6, 30),
      durationInMinutes: 30,
      participants: [],
    },
    {
      id: 5,
      title: 'Mobile app project discussion',
      type: MeetingType.PROJECT,
      startTime: new Date().setHours(7, 50),
      durationInMinutes: 45,
      participants: [],
    },
    {
      id: 6,
      title: 'Desktop app project discussion',
      type: MeetingType.PROJECT,
      startTime: new Date().setHours(9, 50),
      durationInMinutes: 50,
      participants: [],
    },
    {
      id: 7,
      title: 'Instagram clone app project discussion',
      type: MeetingType.PROJECT,
      startTime: new Date().setDate(new Date().getDate() + 1),
      durationInMinutes: 50,
      participants: [],
    },
  ],
};

export const calendarReducer: Reducer<ICalendarState> = (
  state = initialState,
  action: any,
): ICalendarState => {
  switch (action.type) {
    case CalendarActionTypes.TOGGLE_TODAY_MEETINGS: {
      return {
        ...state,
        showTodayOnlyInMeetings: !state.showTodayOnlyInMeetings,
      };
    }
    default:
      return state;
  }
};
