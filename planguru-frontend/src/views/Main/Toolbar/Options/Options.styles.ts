import styled from 'styled-components';
import netguruLogo from '../../../../assets/images/Netguru.png';
import { ButtonStyleMixin } from '../../../../constants/StyleMixins';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 258px;
  border-right: 1px solid rgb(241, 241, 245);
  background-color: #fff;
`;

interface IButtonWrapperProps {
  ref: any;
}

export const ButtonWrapper = styled.button<IButtonWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  ${ButtonStyleMixin};
`;

export const NetguruLogo = styled.div`
  width: 32px;
  height: 32px;
  margin-right: 16px;
  background-image: url(${netguruLogo});
`;

export const Title = styled.div`
  margin-right: 10px;
  color: rgb(37, 38, 94);
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0.4px;
`;
