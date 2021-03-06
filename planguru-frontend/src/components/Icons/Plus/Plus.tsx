import React from 'react';
import { IIconProps } from '../IIconProps';

const Plus: React.FC<IIconProps> = ({
  width = 22,
  height = 22,
  color = '#fff',
}) => (
  <svg width={width} height={height}>
    <path
      fill={color}
      // tslint:disable-next-line:max-line-length
      d="M9.714 1.71a1 1 0 0 1 1-1h.563a1 1 0 0 1 1 1v8.004h8.004a1 1 0 0 1 1 1v.563a1 1 0 0 1-1 1h-8.004v8.004a1 1 0 0 1-1 1h-.563a1 1 0 0 1-1-1v-8.004H1.71a1 1 0 0 1-1-1v-.563a1 1 0 0 1 1-1h8.004z"
    />
  </svg>
);

export default Plus;
