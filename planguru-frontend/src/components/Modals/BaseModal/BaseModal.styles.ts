import posed from 'react-pose';
import styled from 'styled-components';
import { ANIMATION_TRANSITION } from '../../../constants/Animation';

const PosedWrapper = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      ...ANIMATION_TRANSITION,
    },
  },
  exit: {
    y: '30%',
    opacity: 0,
    scale: 0.7,
    transition: {
      ...ANIMATION_TRANSITION,
    },
  },
});

export const Wrapper = styled(PosedWrapper)`
  padding: 20px;
  width: 800px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 5px -1px rgba(0, 0, 0, 0.2);
`;
