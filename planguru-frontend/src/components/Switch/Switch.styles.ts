import posed from 'react-pose';
import styled from 'styled-components';
import { ButtonStyleMixin } from '../../constants/StyleMixins';

export const Wrapper = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  width: 52px;
  height: 30px;
  border-radius: 16px;
  border: 2px solid rgb(241, 241, 245);
  background-color: rgb(241, 241, 245);
  cursor: pointer;
  ${ButtonStyleMixin};
`;

export const ActiveIndicator = styled.div`
  position: absolute;
  left: 10px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgb(45, 199, 109);
`;

const PosedCircle = posed.div({
  left: {
    x: -3,
  },
  right: {
    x: 16,
  },
});

export const Circle = styled(PosedCircle)`
  width: 24px;
  height: 24px;
  box-shadow: 0 2px 4px rgba(37, 38, 94, 0.1);
  background-color: rgb(255, 255, 255);
  border-radius: 50%;
`;
