import moment from 'moment';

export const getDurationStringFromInteval = (
  firstDate: any,
  secondDate: any,
) => {
  const format = 'HH:mm A';

  const startTimeFormatted = moment(firstDate).format(format);
  const endTimeFormatted = moment(secondDate).format(format);

  return `${startTimeFormatted} - ${endTimeFormatted}`;
};
