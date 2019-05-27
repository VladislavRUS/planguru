import styled from 'styled-components';
import { ButtonStyleMixin } from '../../constants/StyleMixins';

interface IStyledButtonProps {
  backgroundColor: string;
}

export const StyledButton = styled.button<IStyledButtonProps>`
  position: relative;
  padding: 12px 24px;
  border-radius: 23px;
  background-color: ${props => props.backgroundColor};
  border: none;
  ${ButtonStyleMixin};
`;

interface ITextProps {
  textColor: string;
  isVisible: boolean;
}

export const Text = styled.span<ITextProps>`
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.44px;
  color: ${props => props.textColor};
  opacity: ${props => (props.isVisible ? 1 : 0)};
`;

export const SpinnerWrapper = styled.span`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
