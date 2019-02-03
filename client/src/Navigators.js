import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation';

import {
    HomeScreen,
    UserModeStart,
    OrderDrinksScreen
} from './screens';

const RootStack = createStackNavigator(
  {
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: {
          header: null
        }
    },
    UserModeStart: {
      screen: UserModeStart,
      navigationOptions: {
        header: null
      }
    },
    OrderDrinksScreen: {
      screen: OrderDrinksScreen,
      navigationOptions: {
        header: null
      }
    }
  },
{
  initialRouteName: 'OrderDrinksScreen',
});

const Main = createAppContainer(RootStack);
export default Main;