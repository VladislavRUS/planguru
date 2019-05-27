import React from 'react';
import { IIconProps } from '../IIconProps';

const Menu: React.FC<IIconProps> = ({
  width = 24,
  height = 18,
  color = '#fff',
}) => (
  <svg width={width} height={height}>
    <path
      fill={color}
      // tslint:disable-next-line:max-line-length
      d="M1 0h22a1 1 0 0 1 0 2H1a1 1 0 0 1 0-2zm0 8h18a1 1 0 0 1 0 2H1a1 1 0 0 1 0-2zm0 8h14a1 1 0 0 1 0 2H1a1 1 0 0 1 0-2z"
    />
  </svg>
);

export default Menu;
