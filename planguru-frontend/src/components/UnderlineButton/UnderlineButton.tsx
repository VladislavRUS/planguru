import React, { SyntheticEvent } from 'react';
import { Button } from './UnderlineButton.styles';

interface IUnderlineButtonProps {
  onClick: (event: SyntheticEvent) => void;
  text: string;
  textColor?: string; // rgba!
  borderColor?: string; // rgba!
}

const UnderlineButton: React.FC<IUnderlineButtonProps> = ({
  onClick,
  text,
  textColor = 'rgb(117, 64, 238)',
  borderColor = 'rgba(117, 64, 238, 0.15)',
}) => (
  <Button onClick={onClick} textColor={textColor} borderColor={borderColor}>
    {text}
  </Button>
);

export default UnderlineButton;
