import React from 'react';
import { IIconProps } from '../IIconProps';

const Close: React.FC<IIconProps> = ({
  width = 18,
  height = 19,
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
      d="M1 1l16 16M17 1L1 17"
    />
  </svg>
);

export default Close;
