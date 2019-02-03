import React, { Component } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import { createBottomTabNavigator, createAppContainer, NavigationActions } from 'react-navigation';

import { DrinkList } from '../containers';
import { beer, checkout, verified } from '../../assets/images';

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
    Order: DrinkList,
    Checkout: SettingsScreen,
    Pickup: SettingsScreen
});

export default createAppContainer(OrderDrinksScreen);