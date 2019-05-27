import React from 'react';
import { IIconProps } from '../IIconProps';

const Kebub: React.FC<IIconProps> = ({
  width = 4,
  height = 16,
  color = '#fff',
}) => (
  <svg width={width} height={height}>
    <path
      fill={color}
      d="M0 2a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm0 6a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm0 6a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
    />
  </svg>
);

export default Kebub;
