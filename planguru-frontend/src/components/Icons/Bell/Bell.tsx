import React from 'react';
import { IIconProps } from '../IIconProps';

const Bell: React.FC<IIconProps> = ({
  width = 28,
  height = 28,
  color = '#7540ee',
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
      d="M17.25 22.94a3.25 3.25 0 1 1-6.5 0M1.81 19.69h24.375M24.565 19.685v0h.813c-1.796 0-4.063-1.454-4.063-3.25V9.122a7.313 7.313 0 0 0-7.313-7.312v0A7.313 7.313 0 0 0 6.69 9.122v7.313a3.25 3.25 0 0 1-3.25 3.25"
    />
  </svg>
);

export default Bell;
