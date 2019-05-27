import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { Routes } from '../../constants/Routes';
import Calendar from '../Calendar/Calendar';
import Connections from '../Connections';
import Messages from '../Messages';
import { Content, Wrapper } from './Main.styles';
import Navigation from './Navigation/Navigation';
import Toolbar from './Toolbar/Toolbar';

class Main extends React.Component {
  public render() {
    return (
      <Wrapper>
        <Navigation />
        <Toolbar />
        <Content>
          <Switch>
            <Route path={Routes.CALENDAR} component={Calendar} />
            <Route path={Routes.MESSAGES} component={Messages} />
            <Route path={Routes.CONNECTIONS} component={Connections} />
            <Redirect to={Routes.CALENDAR} />
          </Switch>
        </Content>
      </Wrapper>
    );
  }
}

export default Main;
