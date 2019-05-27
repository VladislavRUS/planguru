import React from 'react';
import { IIconProps } from '../IIconProps';
import { ChevronIconImage } from './Chevron.styles';

const Chevron: React.FC<IIconProps> = ({ width = 12, height = 7 }) => (
  <ChevronIconImage width={width} height={height} />
);

export default Chevron;
