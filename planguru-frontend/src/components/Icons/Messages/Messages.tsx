import React from 'react';
import { IIconProps } from '../IIconProps';

const Messages: React.FC<IIconProps> = ({
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
      d="M24.25 10.75v0l-11.25 6v0l-11.25-6v12a1.5 1.5 0 0 0 1.5 1.5h19.5a1.5 1.5 0 0 0 1.5-1.5z"
    />
    <path
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={50}
      strokeWidth={2}
      d="M4.75 11.5v0-9.75 0h16.5v9.75M9.25 6.25h7.5M9.25 10.75h7.5"
    />
  </svg>
);

export default Messages;
