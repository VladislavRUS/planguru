import React from 'react';
import { IIconProps } from '../IIconProps';

const Checkmark: React.FC<IIconProps> = ({
  width = 14,
  height = 14,
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
      d="M1 9.4v0L4.6 13v0L13 1v0"
    />
  </svg>
);

export default Checkmark;
