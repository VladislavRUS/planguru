import posed from 'react-pose';
import styled from 'styled-components';
import { ANIMATION_TRANSITION } from '../../constants/Animation';

interface IWrapperProps {
  left: number;
  top: number;
  width: number;
}

const PosedWrapper = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      ...ANIMATION_TRANSITION,
    },
  },
  exit: {
    y: '40%',
    opacity: 0,
    transition: {
      ...ANIMATION_TRANSITION,
    },
  },
});

export const Wrapper = styled(PosedWrapper)<IWrapperProps>`
  position: absolute;
  left: ${props => props.left}px;
  top: ${props => props.top}px;
  width: ${props => props.width}px;
  background-color: white;
  box-shadow: 0 0 20px -2px rgba(0, 0, 0, 0.1);
  border: 1px solid rgb(241, 241, 245);
  border-radius: 5px;
  padding: 15px;
  z-index: 1000;
`;
