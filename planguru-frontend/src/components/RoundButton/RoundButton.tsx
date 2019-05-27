import React from 'react';
import PlusIcon from '../Icons/Plus';
import { Wrapper } from './RoundButton.styles';

interface IRoundButtonProps {
  onClick: () => void;
  backgroundColor?: string;
  boxShadowColor?: string;
  icon?: any;
}

const RoundButton: React.FC<IRoundButtonProps> = ({
  backgroundColor = 'rgb(117, 64, 238)',
  boxShadowColor = 'rgba(117, 64, 238, 0.4)',
  icon = <PlusIcon />,
  onClick,
}) => (
  <Wrapper
    backgroundColor={backgroundColor}
    boxShadowColor={boxShadowColor}
    onClick={onClick}
  >
    {icon}
  </Wrapper>
);

export default RoundButton;
