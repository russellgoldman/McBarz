import React, { Component } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity, TextInput, Alert } from 'react-native';
import { createBottomTabNavigator, createAppContainer, NavigationActions } from 'react-navigation';

import { DrinkList, Checkout } from '../containers';
import { bud, corona, hein, pbr } from '../../assets/images';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const pixelWidth = 414;
const pixelHeight = 736;

class OrderDrinksScreen extends Component {
    constructor() {
        super();
        this._updateDrinksCallback = this._updateDrinksCallback.bind(this);
    }

    state = {
        drinks: [
            {
                name: 'Budweiser',
                price: '$5.95',
                image: bud,
                selected: 0,
                type: 'Beer'
            },
            {
                name: 'Blue Ribbon',
                price: '$5.95',
                image: pbr,
                selected: 0,
                type: 'Beer'
            },
            {
                name: 'Heinekin',
                price: '$5.95',
                image: hein,
                selected: 0,
                type: 'Beer'
            },
            {
                name: 'Corona',
                price: '$5.95',
                image: corona,
                selected: 0,
                type: 'Beer'
            },
            {
                name: `Corona Extra`,
                price: '$5.95',
                image: corona,
                selected: 0,
                type: 'Beer'
            }
        ]
    };

    _updateDrinksCallback = (newDrinks) => {
        this.setState({ drinks: newDrinks });
    };

    _findAllSelected = () => {
        return this.state.drinks.filter((obj) => obj.selected != 0 );
    }

    render() {
        const {
            buttonStyle, buttonTextStyle
        } = styles;

        return (
            <View>
                <DrinkList drinks={this.state.drinks} updateDrinksCallback={this._updateDrinksCallback} />
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: screenHeight * (60 / pixelHeight) }}>
                    <TouchableOpacity style={buttonStyle} onPress={() => {
                        let selectedDrinks = this._findAllSelected();
                        if (selectedDrinks.length === 0) {
                            Alert.alert('Select one or more drinks before checking out');
                        } else {
                            this.props.navigation.navigate('CheckoutScreen', {
                                drinks: selectedDrinks
                            });
                        }
                    }}>
                        <Text style={buttonTextStyle}>Checkout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = {
    buttonStyle: {
        backgroundColor: '#F2463A',
        borderRadius: 10,
        height: screenHeight * (50 / pixelHeight),
        width: screenWidth * (340 / pixelWidth),
        justifyContent: 'center', 
        alignItems: 'center'
    },
    buttonTextStyle: {
        fontFamily: 'abeezee',
        color: '#fff',
        fontSize: 24,
    }
}

export default OrderDrinksScreen;