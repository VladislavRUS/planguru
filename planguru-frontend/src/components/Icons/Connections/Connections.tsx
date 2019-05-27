import React from 'react';
import { IIconProps } from '../IIconProps';

const Connections: React.FC<IIconProps> = ({
  width = 20,
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
      d="M-71.25-842.75a2 2 0 0 1-2 2h-.5a2 2 0 0 1-2-2v-.5a2 2 0 0 1 2-2h.5a2 2 0 0 1 2 2zM13.75 22.75v0h3v0-4.5 0h1.5v0-4.5a1.5 1.5 0 0 0-1.5-1.5h-1.5v0M4 4.75a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3v0a3 3 0 0 1-3-3zM10.75 24.25v0h-7.5v0-6 0h-1.5v0-4.5a3 3 0 0 1 3-3h4.5a3 3 0 0 1 3 3v4.5h-1.5v0z"
    />
  </svg>
);

export default Connections;
