import React from 'react';
import { IIconProps } from '../IIconProps';

const Logo: React.FC<IIconProps> = ({
  width = 24,
  height = 24,
  color = '#7540ee',
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
  >
    <g>
      <g>
        <path
          fill={color}
          // tslint:disable-next-line:max-line-length
          d="M19.5 5.997h-9v-1.5h9zm0 4.5h-9v-1.5h9zm0 4.5h-9v-1.5h9zm-6 6v1.5h-12v-1.5c0-.828.673-1.5 1.5-1.5h10.903a2.977 2.977 0 0 0-.403 1.5zM23.25.02H6.75A.75.75 0 0 0 6 .77v17.227H3c-1.655 0-3 1.345-3 3v2.25c0 .414.335.75.75.75h13.5a.75.75 0 0 0 .75-.75v-2.25c0-.828.673-1.5 1.5-1.5s1.5.672 1.5 1.5c0 1.654 1.345 3 3 3s3-1.346 3-3V.77a.75.75 0 0 0-.75-.75z"
        />
      </g>
    </g>
  </svg>
);

export default Logo;
