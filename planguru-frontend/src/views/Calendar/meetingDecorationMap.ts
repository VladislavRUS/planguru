import dailyMeetingLogo from '../../assets/images/dailyMeeting.png';
import projectMeetingLogo from '../../assets/images/projectMeeting.png';
import webinarMeetingLogo from '../../assets/images/webinarMeeting.png';
import { MeetingType } from '../../store/calendar/types';

export const MEETING_DECORATION_MAP = {
  [MeetingType.DAILY]: {
    backgroundColor: 'rgba(45, 199, 109, 0.4)',
    borderColor: 'rgba(45, 199, 109, 0.7)',
    fontColor: 'rgb(45, 199, 109)',
    checkmarkBackgroundColor: 'rgb(233, 249, 240)',
    logo: dailyMeetingLogo,
  },
  [MeetingType.PROJECT]: {
    backgroundColor: 'rgb(234, 239, 250)',
    borderColor: 'rgba(47, 97, 213, 0.3)',
    fontColor: 'rgb(47, 97, 213)',
    checkmarkBackgroundColor: 'rgba(63, 182, 220, 0.1)',
    logo: projectMeetingLogo,
  },
  [MeetingType.WEBINAR]: {
    backgroundColor: 'rgba(255, 112, 82, 0.4)',
    borderColor: 'rgba(255, 112, 82, 0.7)',
    fontColor: 'rgb(255, 112, 82)',
    checkmarkBackgroundColor: 'rgba(255, 112, 82, 0.1)',
    logo: webinarMeetingLogo,
  },
};
