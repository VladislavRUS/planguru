import posed from 'react-pose';
import styled, { css } from 'styled-components';
import { ANIMATION_TRANSITION } from '../../../../constants/Animation';
import { ButtonStyleMixin } from '../../../../constants/StyleMixins';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  background-color: rgb(117, 64, 238);
  z-index: 2;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 108px;
  background-color: rgb(37, 38, 94);
`;

export const MenuItems = styled.div`
  margin-top: 150px;
`;

interface IMenuItemProps {
  isHovered: boolean;
  isActive: boolean;
  isOuterMenuVisible: boolean;
}

export const MenuItem = styled.button<IMenuItemProps>`
  position: relative;
  height: 72px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  ${ButtonStyleMixin};

  &:hover {
    background-color: rgba(37, 38, 94, 0.25);
  }

  ${props =>
    (props.isHovered || props.isActive) &&
    css`
      background-color: rgba(37, 38, 94, 0.25);
    `};

  ${props =>
    props.isActive &&
    !props.isOuterMenuVisible &&
    css`
      &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: 2px;
        background-color: rgb(255, 200, 0);
        transition: background-color 0.2s ease;
      }
    `};
`;

export const Actions = styled.div`
  margin-top: auto;
  margin-bottom: 42px;
  display: flex;
  justify-content: center;
`;

const PosedActionWrapper = posed.div({
  enter: {
    scale: 1,
    opacity: 1,
    transition: {
      ...ANIMATION_TRANSITION,
    },
  },
  exit: {
    scale: 0,
    opacity: 0,
    transition: {
      ...ANIMATION_TRANSITION,
    },
  },
});

export const ActionWrapper = styled(PosedActionWrapper)``;

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  cursor: pointer;
  ${ButtonStyleMixin};
`;
