import React from 'react';
import { IIconProps } from '../IIconProps';

const Search: React.FC<IIconProps> = ({
  width = 26,
  height = 26,
  color = '#7540ee',
}) => (
  <svg width={width} height={height}>
    <path
      fill="none"
      stroke={color}
      strokeMiterlimit={50}
      strokeWidth={2}
      d="M12.5 24C18.851 24 24 18.851 24 12.5S18.851 1 12.5 1 1 6.149 1 12.5 6.149 24 12.5 24z"
    />
    <path
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={50}
      strokeWidth={2}
      d="M21 21l4 4"
    />
  </svg>
);

export default Search;
