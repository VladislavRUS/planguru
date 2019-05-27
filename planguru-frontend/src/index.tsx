import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'reset-css';
import configureStore from './configureStore';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './views/App/App';

const history = createBrowserHistory();

// @ts-ignore
const initialState = window.initialReduxState;

const store = configureStore(history, initialState);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
