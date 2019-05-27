import styled from 'styled-components';
import { ButtonStyleMixin } from '../../../../constants/StyleMixins';

interface IWrapperProps {
  top: number;
  height: number;
  backgroundColor: string;
  borderColor: string;
}

export const Wrapper = styled.div<IWrapperProps>`
  position: absolute;
  left: 325px;
  right: 77px;
  top: ${props => props.top}px;
  height: ${props => props.height}px;
  background-color: ${props => props.backgroundColor};
  border: 1px solid ${props => props.borderColor};
  border-radius: 10px;
`;

export const Description = styled.div`
  margin-top: 24px;
  margin-left: 24px;
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 24px;
  border-radius: 50%;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

interface ITitleProps {
  fontColor: string;
}

export const Title = styled.div<ITitleProps>`
  margin-bottom: 4px;
  color: ${props => props.fontColor};
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.34px;
`;

export const Duration = styled.div`
  opacity: 0.8;
  color: rgb(120, 121, 147);
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.8px;
  text-transform: uppercase;
`;

interface IKebubIconWrapper {
  ref: any;
}

export const KebubIconWrapper = styled.button<IKebubIconWrapper>`
  position: absolute;
  bottom: 24px;
  right: 24px;
  background-color: transparent;
  cursor: pointer;
  ${ButtonStyleMixin};
`;
