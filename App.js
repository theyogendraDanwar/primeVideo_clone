import * as Screens from './screens'
import React from 'react'
import { View, Text } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

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

const TopTabNavigator = createMaterialTopTabNavigator(
  {
    Home: HomeStackNavigator,
    Movies: SettingsScreen,
    "Tv Shows": SettingsScreen,
  },
  {
    navigationOptions: ({ navigation }) => ({
      header: <Text>Prime Video Clone</Text>
    })
  }
)

const TabNavigator = createBottomTabNavigator(
  {
    Home: TopTabNavigator,
    Search: SettingsScreen,
    Wishlist: SettingsScreen,
    Download: SettingsScreen,
    Settings: SettingsScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;

        switch (routeName) {
          case 'Home':
            iconName = `ios-home`;
            break;
          case 'Settings':
            iconName = `ios-options`;
            break;
          case 'Download':
            iconName = `ios-cloud-download`;
            break;
          case 'Wishlist':
            iconName = `ios-list`;
            break;
          case 'Search':
            iconName = `ios-search`;
            break;
          default:
            iconName = `ios-help`
        }
        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: '#00b9e8',
      inactiveTintColor: 'white',
      labelStyle: {
        fontSize: 12,
      },
      showLabel: false,
      showIcon: true,
      style: {
        backgroundColor: 'black',
      },
    },
  });
  const LoginStackNavigator = createStackNavigator({
    loginScreen: {
      screen: Screens.amaznLoginScreen,
      navigationOptions: ({navigation}) => ({
        headerStyle: {
          backgroundColor: '#232f38',
          paddingTop: 100,
          elevation: 0,
          shadowColor : '#232f38',
          shadowOpacity: 0,
          shadowOffset: {
            height: 0,
          },
          shadowRadius: 0,
        }
      })
    },
    mainMenu: TabNavigator
  });

HomeStackNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  console.log(navigation);
  return {
    tabBarVisible
  }
}

export default createAppContainer(LoginStackNavigator);