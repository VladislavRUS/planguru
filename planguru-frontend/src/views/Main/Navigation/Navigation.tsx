import { push } from 'connected-react-router';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import CalendarIcon from '../../../components/Icons/Calendar';
import ConnectionsIcon from '../../../components/Icons/Connections';
import MessagesIcon from '../../../components/Icons/Messages';
import { Routes } from '../../../constants/Routes';
import { IApplicationState } from '../../../store';
import Menu from './Menu/Menu';
import { Wrapper } from './Navigation.styles';
import OuterMenu from './OuterMenu/OuterMenu';

export interface IMenuItem {
  route: string;
  name: string;
  icon: any;
}

const menuItems: IMenuItem[] = [
  {
    route: Routes.CALENDAR,
    name: 'Calendar',
    icon: <CalendarIcon />,
  },
  {
    route: Routes.MESSAGES,
    name: 'Messages',
    icon: <MessagesIcon />,
  },
  {
    route: Routes.CONNECTIONS,
    name: 'Connections',
    icon: <ConnectionsIcon />,
  },
];

interface IMapStateProps {
  currentRoute: string;
}

interface IMapDispatchProps {
  redirect: (route: string) => void;
}

type AllProps = IMapStateProps & IMapDispatchProps;

interface INavigationState {
  isOuterMenuVisible: boolean;
  hoveredMenuItem: number;
}

const mapStateToProps = (state: IApplicationState) => {
  return {
    currentRoute: state.router.location.pathname,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      redirect: (route: string) => push(route),
    },
    dispatch,
  );

class Navigation extends React.Component<AllProps, INavigationState> {
  constructor(props: AllProps) {
    super(props);
    this.state = {
      isOuterMenuVisible: false,
      hoveredMenuItem: 0,
    };
  }

  public componentDidMount() {
    this.setState({
      hoveredMenuItem: menuItems.findIndex(
        menuItem => this.props.currentRoute === menuItem.route,
      ),
    });
  }

  public render() {
    const { currentRoute } = this.props;
    const { hoveredMenuItem, isOuterMenuVisible } = this.state;

    return (
      <Wrapper>
        <Menu
          menuItems={menuItems}
          currentRoute={currentRoute}
          isOuterMenuVisible={isOuterMenuVisible}
          hoveredMenuItem={hoveredMenuItem}
          onMenuItemHover={this.onMenuItemHover}
          onToggleOuterMenu={this.onToggleOuterMenu}
          onMenuItemClick={this.onMenuItemClick}
        />
        <OuterMenu
          menuItems={menuItems}
          currentRoute={currentRoute}
          isVisible={isOuterMenuVisible}
          hoveredMenuItem={hoveredMenuItem}
          onMenuItemHover={this.onMenuItemHover}
          onMenuItemClick={this.onMenuItemClick}
        />
      </Wrapper>
    );
  }

  private onToggleOuterMenu = () => {
    this.setState({
      isOuterMenuVisible: !this.state.isOuterMenuVisible,
    });
  };

  private onMenuItemClick = (route: string) => {
    this.props.redirect(route);
  };

  private onMenuItemHover = (index: number) => {
    this.setState({
      hoveredMenuItem: index,
    });
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navigation);
