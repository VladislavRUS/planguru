import React from 'react';

import { Wrapper } from './NumberChip.styles';

interface INumberChipProps {
  number: number;
  borderColor: string;
  backgroundColor: string;
  fontColor: string;
}

const NumberChip: React.FC<INumberChipProps> = props => (
  <Wrapper
    fontColor={props.fontColor}
    borderColor={props.borderColor}
    backgroundColor={props.backgroundColor}
  >
    {props.number}
  </Wrapper>
);

export default NumberChip;
