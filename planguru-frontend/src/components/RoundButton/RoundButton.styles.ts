import styled from 'styled-components';
import { ButtonStyleMixin } from '../../constants/StyleMixins';

interface IWrapperProps {
  backgroundColor: string;
  boxShadowColor: string;
}

export const Wrapper = styled.button<IWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 72px;
  box-shadow: 0 4px 29px ${props => props.boxShadowColor};
  background-color: ${props => props.backgroundColor};
  border-radius: 50%;
  cursor: pointer;
  ${ButtonStyleMixin};
`;
