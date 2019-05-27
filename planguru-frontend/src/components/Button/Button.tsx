import React, { SyntheticEvent } from 'react';
import { CircleSpinner } from 'react-spinners-kit';
import { SpinnerWrapper, StyledButton, Text } from './Button.styles';

interface IButtonProps {
  onClick: (event: SyntheticEvent) => void;
  text: string;
  isLoading?: boolean;
  textColor?: string;
  backgroundColor?: string;
}

class Button extends React.Component<IButtonProps> {
  public render() {
    const {
      text,
      textColor = 'rgb(117, 64, 238)',
      backgroundColor = 'rgba(117, 64, 238, 0.2)',
      isLoading,
    } = this.props;

    return (
      <StyledButton onClick={this.onClick} backgroundColor={backgroundColor}>
        <Text textColor={textColor} isVisible={!isLoading}>
          {text}
        </Text>
        {isLoading && (
          <SpinnerWrapper>
            <CircleSpinner color={textColor} size={19} />
          </SpinnerWrapper>
        )}
      </StyledButton>
    );
  }
  private onClick = (event: SyntheticEvent) => {
    const { isLoading, onClick } = this.props;

    if (isLoading) {
      return;
    }

    onClick(event);
  };
}

export default Button;
