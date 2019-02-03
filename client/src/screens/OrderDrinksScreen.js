import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import { createBottomTabNavigator, createAppContainer, NavigationActions } from 'react-navigation';

import { DrinkList } from '../containers';

class SettingsScreen extends React.Component {
    render() {
        return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
        );
    }
}
  
const OrderDrinksScreen = createBottomTabNavigator({
    Home: DrinkList,
    Settings: SettingsScreen,
});

export default createAppContainer(OrderDrinksScreen);