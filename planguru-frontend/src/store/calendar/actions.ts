import { action } from 'typesafe-actions';
import { CalendarActionTypes } from './types';

export const toggleTodayMeetings = () =>
  action(CalendarActionTypes.TOGGLE_TODAY_MEETINGS);
