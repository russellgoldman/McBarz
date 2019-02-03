import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation';

import {
    HomeScreen,
    UserModeStart,
    OrderDrinksScreen,
    CheckoutScreen,
    NFCRetrievalScreen
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
    },
    CheckoutScreen: {
      screen: CheckoutScreen,
      navigationOptions: {
        header: null
      }
    },
    NFCRetrievalScreen: {
      screen: NFCRetrievalScreen,
      navigationOptions: {
        header: null
      }
    }
  },
{
  initialRouteName: 'HomeScreen',
});

const Main = createAppContainer(RootStack);
export default Main;
