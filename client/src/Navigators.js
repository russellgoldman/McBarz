import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation';

import {
    HomeScreen,
    UserModeStart
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
    }
  },
{
  initialRouteName: 'UserModeStart',
});

const Main = createAppContainer(RootStack);
export default Main;