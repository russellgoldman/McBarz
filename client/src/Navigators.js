import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation';

import {
    HomeScreen,
} from './screens';

const RootStack = createStackNavigator(
  {
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: {
        header: null
        }
    },
  },
{
  initialRouteName: 'HomeScreen',
});

const Main = createAppContainer(RootStack);
export default Main;
