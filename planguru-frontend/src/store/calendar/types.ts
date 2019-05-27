export interface ICalendarState {
  meetings: IMeeting[];
  showTodayOnlyInMeetings: boolean;
}

export enum MeetingType {
  DAILY = 'daily',
  PROJECT = 'project',
  WEBINAR = 'webinar',
}

export interface IMeeting {
  id: number;
  type: MeetingType.DAILY | MeetingType.PROJECT | MeetingType.WEBINAR;
  title: string;
  startTime: number;
  durationInMinutes: number;
  participants: IParticipant[];
}

export interface IParticipant {
  firstName: string;
  lastName: string;
  avatarUrl: string;
}

export enum CalendarActionTypes {
  TOGGLE_TODAY_MEETINGS = '@@calendar/TOGGLE_TODAY_MEETINGS',
}
