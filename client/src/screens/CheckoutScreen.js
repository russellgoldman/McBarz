import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationActions } from 'react-navigation';

import { DrinkSection } from '../components';
import { bud, corona, hein, pbr } from '../../assets/images';
import { DrinkListCheckout } from '../containers';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const pixelWidth = 414;
const pixelHeight = 736;

class Checkout extends Component {
    render() {
        const {
            titleStyle
        } = styles;

        return (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={titleStyle}>Checkout</Text>
                <DrinkListCheckout drinks={this.props.navigation.state.params.drinks} />
            </View>
        );
    }
}

const styles = {
    titleStyle: {
        marginTop: screenHeight * (100 / pixelHeight),
        fontFamily: 'abeezee',
        fontSize: 45,
        color: '#F2463A',
        marginBottom: screenHeight * (25 / pixelHeight),
    },
}

export default Checkout;