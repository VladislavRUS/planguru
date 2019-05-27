import styled from 'styled-components';
import { ButtonStyleMixin } from '../../../../constants/StyleMixins';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 32px;
  height: 100%;
  max-width: 500px;
  background-color: #fff;
  flex-grow: 1;
`;

interface IBellIconWrapperProps {
  ref: any;
}

export const BellIconWrapper = styled.button<IBellIconWrapperProps>`
  position: relative;
  background-color: transparent;
  ${ButtonStyleMixin};

  &:after {
    content: '';
    position: absolute;
    right: 2px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: rgb(255, 112, 82);
  }
`;

interface IPersonalProps {
  ref: any;
}

export const Personal = styled.button<IPersonalProps>`
  display: flex;
  align-items: center;
  margin-left: auto;
  background-color: transparent;
  ${ButtonStyleMixin};
`;

export const Greeting = styled.div`
  width: 102px;
  height: 22px;
  color: rgb(37, 38, 94);
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.16px;
`;

export const Name = styled.span`
  color: rgb(117, 64, 238);
`;

export const Avatar = styled.img`
  margin-left: 26px;
  margin-right: 24px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
`;
