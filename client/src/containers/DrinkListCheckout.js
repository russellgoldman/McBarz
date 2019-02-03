import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationActions } from 'react-navigation';

import { DrinkSection } from '../components';
import { bud, corona, hein, pbr } from '../../assets/images';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const pixelWidth = 414;
const pixelHeight = 736;

class DrinkListCheckout extends Component {
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
        newDrinks = this.state.drinks;
        newDrinks[index].selected = newSelected;
        this.setState({ drinks: newDrinks })
    }

    render() {
        const {
            backgroundContainer, titleStyle, 
        } = styles;
        
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
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
        height: screenHeight * (300 / pixelHeight),
        backgroundColor: 'rgba(237, 237, 237, 0.5)',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderColor: 'rgba(0, 0, 0, 0.25)',
        borderWidth: 1,
    }
};

export default DrinkListCheckout;