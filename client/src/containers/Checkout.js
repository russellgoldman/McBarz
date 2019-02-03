import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationActions } from 'react-navigation';

import { DrinkSection } from '../components';
import { bud, corona, hein, pbr } from '../../assets/images';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const pixelWidth = 414;
const pixelHeight = 736;

class Checkout extends Component {
    render() {
        return (
            <View></View>
        );
    }
}

export default Checkout;