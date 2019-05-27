import posed from 'react-pose';
import styled, { css } from 'styled-components';
import { ANIMATION_TRANSITION } from '../../../../constants/Animation';

const PosedWrapper = posed.div({
  enter: {
    x: 0,
    transition: {
      ...ANIMATION_TRANSITION,
    },
  },
  exit: {
    x: '-100%',
    transition: {
      ...ANIMATION_TRANSITION,
    },
  },
});

export const Wrapper = styled(PosedWrapper)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 108px;
  width: 257px;
  background-color: #fff;
  box-shadow: 4px 0 20px rgba(37, 38, 94, 0.1);
  z-index: 1;
`;

export const MenuItems = styled.div`
  margin-top: 258px;
`;

interface IMenuItemProps {
  key: string;
  onClick: () => void;
  isActive: boolean;
  isHovered: boolean;
}

export const MenuItem = styled.div<IMenuItemProps>`
  position: relative;
  padding-right: 24px;
  display: flex;
  height: 72px;
  width: 100%;
  align-items: center;
  cursor: pointer;
  border-right: 2px solid transparent;

  ${props =>
    props.isActive &&
    css`
      background-color: rgba(117, 64, 238, 0.1);
      border-right: 2px solid rgb(255, 200, 0);
    `}

  &:hover {
    background-color: rgba(117, 64, 238, 0.1);
  }

  ${props =>
    props.isHovered &&
    css`
      background-color: rgba(117, 64, 238, 0.1);
    `};
`;

export const Text = styled.div`
  margin-left: 32px;
  margin-right: auto;
  color: rgb(120, 121, 147);
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.27px;
`;
