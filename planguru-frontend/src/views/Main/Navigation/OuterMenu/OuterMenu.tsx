import React from 'react';
import { PoseGroup } from 'react-pose';
import { connect } from 'react-redux';
import NumberChip from '../../../../components/NumberChip/NumberChip';
import { Routes } from '../../../../constants/Routes';
import { IApplicationState } from '../../../../store';
import { IMenuItem } from '../Navigation';
import { MenuItem, MenuItems, Text, Wrapper } from './OuterMenu.styles';

interface IOuterMenuProps {
  currentRoute: string;
  menuItems: IMenuItem[];
  isVisible: boolean;
  hoveredMenuItem: number;
  onMenuItemHover: (index: number) => void;
  onMenuItemClick: (route: string) => void;
}

interface IMapStateProps {
  numberOfMeetings: number;
}

type AllProps = IOuterMenuProps & IMapStateProps;

const mapStateToProps = (state: IApplicationState) => ({
  numberOfMeetings: state.calendar.meetings.length,
});

const OuterMenu: React.FC<AllProps> = (props: AllProps) => {
  return (
    <PoseGroup>
      {props.isVisible && (
        <Wrapper key={'wrapper'}>
          <MenuItems>
            {props.menuItems.map((menuItem, idx: number) => {
              const onClick = () => props.onMenuItemClick(menuItem.route);
              const onMouseEnter = () => props.onMenuItemHover(idx);
              const onMouseLeave = () => props.onMenuItemHover(-1);

              return (
                <MenuItem
                  key={menuItem.name}
                  isActive={props.currentRoute === menuItem.route}
                  isHovered={idx === props.hoveredMenuItem}
                  onClick={onClick}
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                >
                  <Text>{menuItem.name}</Text>
                  {menuItem.route === Routes.CALENDAR && (
                    <NumberChip
                      borderColor={'rgba(117, 64, 238, 0.1)'}
                      fontColor={'rgb(241, 235, 253)'}
                      backgroundColor={'rgb(117, 64, 238)'}
                      number={props.numberOfMeetings}
                    />
                  )}
                </MenuItem>
              );
            })}
          </MenuItems>
        </Wrapper>
      )}
    </PoseGroup>
  );
};

export default connect(
  mapStateToProps,
  null,
)(OuterMenu);
