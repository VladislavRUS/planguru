import React from 'react';
import { IIconProps } from '../IIconProps';

const Calendar: React.FC<IIconProps> = ({
  width = 26,
  height = 26,
  color = '#fff',
}) => (
  <svg width={width} height={height}>
    <path
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={50}
      strokeWidth={2}
      // tslint:disable-next-line:max-line-length
      d="M1.8 10.25h22.4M22.6 4.75H3.4c-.883 0-1.6.672-1.6 1.5v16.5c0 .828.717 1.5 1.6 1.5h19.2c.883 0 1.6-.672 1.6-1.5V6.25c0-.828-.717-1.5-1.6-1.5zM6.6 1.75v3M19.4 1.75v3M13 1.75v3"
    />
  </svg>
);

export default Calendar;
