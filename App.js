import * as Screens from './screens';
import React from 'react';
import { View, Text } from 'react-native'
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation';

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

const HomeStackNavigator = createStackNavigator({
  amaznHomeScreen: {
    screen: Screens.amaznHomeScreen,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  },
  aItemDetails: {
    screen: Screens.amaznItemDetails,
    navigationOptions: ({ navigation }) => ({
      headerBackImage: null,
      headerLeft: null,
      headerBackTitle: null,
    })
  }
})

const TopTabNavigator = createMaterialTopTabNavigator({
  Home: HomeStackNavigator,
  Movies: HomeStackNavigator,
  Shows: HomeStackNavigator
}, {
    tabBarOptions: {
      showIcon: true,
    }
  })

const TabNavigator = createBottomTabNavigator({
  Home: TopTabNavigator,
  SearchScreen: SettingsScreen,
  Wishlist: SettingsScreen,
  DownloadScreen: SettingsScreen,
  Settings: SettingsScreen,
}, {
  navigationOptions: {
    tabBarOnPress: ({ navigation, defaultHandler }) => {
      console.log(navigation);
      // perform your logic here
      // this is mandatory to perform the actual switch
      // don't call this if you want to prevent focus
      defaultHandler();
    }
  }
});
HomeStackNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible
  }
}

export default createAppContainer(TabNavigator);