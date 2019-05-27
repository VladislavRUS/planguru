import styled from 'styled-components';
import { ButtonStyleMixin } from '../../constants/StyleMixins';

interface IButtonProps {
  textColor: string;
  borderColor: string;
}

export const Button = styled.button<IButtonProps>`
  padding: 0 0 4px 0;
  background-color: transparent;
  color: ${props => props.textColor};
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.44px;
  border: none;
  border-bottom: 2px solid ${props => props.borderColor};
  ${ButtonStyleMixin};
`;
