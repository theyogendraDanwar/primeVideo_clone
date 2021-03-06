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
import { aLoginInitialState, aLoginReducer } from './reduxhooks/aLoginActions';
import { aSearchInitialState, aSearchReducer } from './reduxhooks/aSearchActions';

const initialState = {
  ...userInitialState,
  ...aItemInitialState,
  ...aLoginInitialState,
  ...aSearchInitialState
};

const reducer = ({user,aItem,login, search}, action) => ({
  user: userReducer(user, action),
  aItem: aItemReducer(aItem,action),
  login: aLoginReducer(login, action),
  search: aSearchReducer(search, action)
})

const Root = () => (
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>
);

AppRegistry.registerComponent(appName, () => Root);





