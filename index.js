/**
 * @format
 */


import React from 'react';
import { AppRegistry } from 'react-native';

import StateProvider from './reduxhooks/state';

import App from './App';
import { name as appName } from './app.json';

import { userInitialState, userReducer } from "./reduxhooks/userActions";
import { aItemInitialState, aItemReducer } from './reduxhooks/aItemActions';

const initialState = {
  ...userInitialState,
  ...aItemInitialState
};

const reducer = ({user,amznItem}, action) => ({
  user: userReducer(user, action),
  aItem: aItemReducer(amznItem,action)
})

const Root = () => (
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>
);

AppRegistry.registerComponent(appName, () => Root);





