import * as Screens from './screens'
import React from 'react'
import { View, Text } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
  createSwitchNavigator,
  StackActions,
  NavigationActions
} from 'react-navigation';

class ComingSoonScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Coming Soon!!!! Be Patient</Text>
      </View>
    );
  }
}

const HomeStackNavigator = createStackNavigator({
  amaznHomeScreen: {
    screen: Screens.amaznHomeScreen,
    navigationOptions: () => ({
      header: null
    })
  },
  aItemDetails: {
    screen: Screens.amaznItemDetails,
    navigationOptions: () => ({
      headerTitle: 'Prime Video Clone',
      headerTitleStyle: {
        color:'white',
        fontSize:18,
        padding:5,
      },
      headerStyle: {
        backgroundColor: 'black',
        height:40,
        color: 'white'
      },
      headerLeft: null,
      tabBarOptions: {
        elevation: 0,
        shadowColor: '#232f38',
        shadowOpacity: 0,
        shadowOffset: {
          height: 0,
        },
        shadowRadius: 0,
      }
    })
  },
  aItemPlay: {
    screen: Screens.YoutubeVideo,
  }
},{headerLayoutPreset: 'center' })

const TopTabNavigator = createMaterialTopTabNavigator({
  Home: HomeStackNavigator,
  Movies: ComingSoonScreen,
  "Tv Shows": ComingSoonScreen,
}, {
    defaultNavigationOptions: ({ navigation }) => ({
      header: (() => {
        <Text>Prime Clone</Text>
      }),
      headerStyle: {
        backgroundColor: '#232f38',
      },
      tabBarOptions: {
        style: {
          backgroundColor: '#232f38',
          paddingTop: 20,
        },
        elevation: 0,
        shadowColor: '#232f38',
        shadowOpacity: 0,
        shadowOffset: {
          height: 0,
        },
        shadowRadius: 0,
      }
    })
  })

const TabNavigator = createBottomTabNavigator(
  {
    Home: TopTabNavigator,
    Search: Screens.amaznSearchScreen,
    Wishlist: ComingSoonScreen,
    Download: ComingSoonScreen,
    Settings: Screens.amaznSettingsScreen,
  },
  {
    resetOnBlur: true,
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarOnPress: ({ navigation, defaultHandler }) => {
        const { routeName } = navigation.state;
        switch (routeName) {
          case 'Home':
            navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [NavigationActions.navigate({ routeName: 'amaznHomeScreen' })],
            }));
            break;
          case 'Search':
            NavigationActions.navigate({ routeName: 'Search' })
          default:
        }
        defaultHandler();
      },
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

const LoginNavigator = createStackNavigator({
  loginScreen: {
    screen: Screens.amaznLoginScreen,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#232f38',
        paddingTop: 80,
        elevation: 0,
        shadowColor: '#232f38',
        shadowOpacity: 0,
        shadowOffset: {
          height: 0,
        },
        shadowRadius: 0,
      }
    })
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

const RootStack = createSwitchNavigator(
  {
    Auth: { screen: LoginNavigator, navigationOptions: { header: null } },
    App: { screen: TabNavigator, navigationOptions: { header: null } }
  },
)

export default createAppContainer(RootStack);