import React from 'react';
import { ActiveIndicator, Circle, Wrapper } from './Switch.styles';

interface ISwitchProps {
  value: boolean;
  onClick: () => void;
}

const Switch: React.FC<ISwitchProps> = props => (
  <Wrapper onClick={props.onClick}>
    <ActiveIndicator />
    <Circle pose={props.value ? 'right' : 'left'} />
  </Wrapper>
);

export default Switch;
