import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Modals from '../../components/Modals/Modals';
import { Routes } from '../../constants/Routes';
import Auth from '../Auth';
import Main from '../Main';

const App: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path={Routes.AUTH} component={Auth} />
        <Route path={Routes.MAIN} component={Main} />
        <Redirect to={Routes.AUTH} />
      </Switch>
      <Modals />
    </>
  );
};

export default App;
