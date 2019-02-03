import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationActions } from 'react-navigation';

import { DrinkSection } from '../components';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const pixelWidth = 414;
const pixelHeight = 736;

class DrinkList extends Component {
    constructor() {
        super();
        this._incrementDecrementSelectedCallback = this._incrementDecrementSelectedCallback.bind(this);
    }

    _renderDrinkSection = () => {
        return this.props.drinks.map((drinkObj, index) => {
            return (
                <View key={index}>
                    <DrinkSection name={drinkObj.name} image={drinkObj.image} price={drinkObj.price} selected={drinkObj.selected}
                        index={index} incrementDecrement={this._incrementDecrementSelectedCallback}/>
                </View>
            );
        });
    };

    _incrementDecrementSelectedCallback = (newSelected, index) => {
        newDrinks = this.props.drinks;
        newDrinks[index].selected = newSelected;
        this.props.updateDrinksCallback(newDrinks);
    }

    render() {
        const {
            backgroundContainer, titleStyle, divider
        } = styles;
        
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={titleStyle}>Beer</Text>
                <View style={backgroundContainer}>
                    <ScrollView style={{ marginTop: screenHeight * (5 / pixelHeight) }}>
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
        height: screenHeight * (450 / pixelHeight),
        backgroundColor: 'rgba(237, 237, 237, 0.5)',
        borderRadius: 20,
        marginTop: screenHeight * (20 / pixelHeight),
        borderColor: 'rgba(0, 0, 0, 0.25)',
        borderWidth: 1 
    },
    titleStyle: {
        marginTop: screenHeight * (75 / pixelHeight),
        fontFamily: 'abeezee',
        fontSize: 45,
        color: '#F2463A',
        marginBottom: screenHeight * (10 / pixelHeight),
    },
};

export default DrinkList;