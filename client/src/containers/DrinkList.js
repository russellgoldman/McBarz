import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationActions } from 'react-navigation';

import { DrinkSection } from '../components';
import { bud, corona, hein, pbr } from '../../assets/images';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const pixelWidth = 414;
const pixelHeight = 736;

class DrinkList extends Component {
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
                image: corona,
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
                image: pbr,
                selected: 0,
                type: 'Beer'
            }
        ]
    };

    _renderDrinkSection = () => {
        return this.state.drinks.map((drinkObj, index) => {
            return (
                <View key={index}>
                    <DrinkSection name={drinkObj.name} image={drinkObj.image} price={drinkObj.price} selected={drinkObj.selected} />
                </View>
            );
        });
    };

    render() {
        const {
            backgroundContainer
        } = styles;
        
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={backgroundContainer}>
                    <ScrollView>
                        {this._renderDrinkSection()}
                    </ScrollView>
                </View>
            </View>
            
        );
    }
}

const styles = {
    backgroundContainer: {
        width: screenWidth * (374 / pixelWidth),
        height: screenHeight * (600 / pixelHeight),
        backgroundColor: 'rgba(237, 237, 237, 0.5)',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: screenHeight * (200 / pixelHeight)
    },
};

export default DrinkList;