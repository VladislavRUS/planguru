import React from 'react';
import { PoseGroup } from 'react-pose';
import CloseIcon from '../../../../components/Icons/Close';
import Logo from '../../../../components/Icons/Logo';
import MenuIcon from '../../../../components/Icons/Menu';
import { IMenuItem } from '../Navigation';
import {
  ActionButton,
  Actions,
  ActionWrapper,
  LogoWrapper,
  MenuItem,
  MenuItems,
  Wrapper,
} from './Menu.styles';

interface IMenuProps {
  currentRoute: string;
  menuItems: IMenuItem[];
  isOuterMenuVisible: boolean;
  hoveredMenuItem: number;
  onMenuItemHover: (index: number) => void;
  onMenuItemClick: (route: string) => void;
  onToggleOuterMenu: () => void;
}

const Menu: React.FC<IMenuProps> = props => {
  return (
    <Wrapper>
      <LogoWrapper>
        <Logo width={32} height={32} color={'#fff'} />
      </LogoWrapper>
      <MenuItems>
        {props.menuItems.map((menuItem, idx: number) => {
          const onClick = () => props.onMenuItemClick(menuItem.route);
          const onMouseEnter = () => props.onMenuItemHover(idx);
          const onMouseLeave = () => props.onMenuItemHover(-1);

          return (
            <MenuItem
              key={menuItem.route}
              onClick={onClick}
              isOuterMenuVisible={props.isOuterMenuVisible}
              isActive={props.currentRoute === menuItem.route}
              isHovered={idx === props.hoveredMenuItem}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              {menuItem.icon}
            </MenuItem>
          );
        })}
      </MenuItems>
      <Actions>
        <PoseGroup>
          {props.isOuterMenuVisible ? (
            <ActionWrapper key={'close'}>
              <ActionButton onClick={props.onToggleOuterMenu}>
                <CloseIcon />
              </ActionButton>
            </ActionWrapper>
          ) : (
            <ActionWrapper key={'menu'}>
              <ActionButton onClick={props.onToggleOuterMenu}>
                <MenuIcon />
              </ActionButton>
            </ActionWrapper>
          )}
        </PoseGroup>
      </Actions>
    </Wrapper>
  );
};

export default Menu;
