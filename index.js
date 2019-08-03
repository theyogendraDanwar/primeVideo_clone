/**
 * @format
 */


import React from 'react';
import { AppRegistry } from 'react-native';

import StateProvider from './reduxhooks/state';

import App from './App';
import { name as appName } from './app.json';

import { countInitialState, countReducer } from "./reduxhooks/countActions";
import { userInitialState, userReducer } from "./reduxhooks/userActions";

const initialState = {
  ...countInitialState,
  ...userInitialState
};

const reducer = ({ user, count }, action) => ({
  userState: userReducer(user, action),
  countState: countReducer(count, action)
});

const Root = () => (
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>
);

AppRegistry.registerComponent(appName, () => Root);





